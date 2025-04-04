import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import path from 'path';
import fs from 'fs';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import rootReducer, { rootSaga } from './modules';
import PreloadContext from './lib/PreloadContext';
import createSagaMiddleware, { END } from 'redux-saga';

// asset-manifest.json 파일 경로들을 조회합니다.
const manifest = JSON.parse(
  fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
);

const chunks = Object.keys(manifest.files)
  .filter((key) => /chunk\.js$/.exec(key)) // chunk.js로 끝나는 키를 찾아서
  .map((key) => `<script src="${manifest.files[key]}"></script>`) // 스크립트 태그로 변환하고
  .join(''); // 합침

function createPage(root, stateScript) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <title>React App</title>
      <link href="${manifest.files['main.css']}" rel="stylesheet" />
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        ${root}
      </div>
      ${stateScript}
      ${chunks}
      <script src="${manifest.files['main.js']}"></script>
    </body>
    </html>
    `;
}

const app = express();

// 서버 사이드 렌더링을 처리할 핸들한 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해 줍니다.
  const context = {};
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
  );

  // sagaMiddleware로 만든 Task를 Promise로 변환 (별도 작업이 없다면 Promise가 끝나지 않는다. -> 루트 사가에서 액션을 끊임없이 모니터링하기 때문, END로 Promise 종료 가능)
  const sagaPromise = sagaMiddleware.run(rootSaga).toPromise;

  const preloadContext = {
    done: false,
    promises: [],
  };
  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );

  // *renderToStaticMarkup -> 리액트를 사용해 정적인 페이지를 만들 때 사용, 클라이언트 쪽에서 HTML DOM 인터랙션 지원 어려움.
  // 현재는 Preloader로 넣어준 함수를 호출하기 위해 사용하는 것 (이 함수의 처리 속도가 renderToString보다 좀 더 빠르다.)
  ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup으로 한번 렌더링합니다.
  store.dispatch(END); // redux-saga의 END 액션을 모니터링하는 사가들이 모두 종료됩니다.
  try {
    await sagaPromise; // 기존에 진행 중이던 사가들이 모두 끝날 때까지 기다립니다.
    await Promise.all(preloadContext.promises); // 모든 프로미스를 기다립니다.
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 합니다.
  // JSON을 문자열로 변환하고 악성 스크립트가 실행되는 것을 방지하기 위해 <를 치환 처리
  const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
  const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`; // 리덕스 초기 상태를 스크립트로 주입합니다.

  res.send(createPage(root, stateScript)); // 클라이언트에게 결과물을 응답합니다.
};

const serve = express.static(path.resolve('./build'), {
  index: false, // "/" 경로에서 index.html을 보여 주지 않도록 설정
});

app.use(serve); // 순서가 중요합니다. >> serverRender 전 <<에 위치해야 합니다.
app.use(serverRender);

// 4000 포트로 서버를 가동합니다.
app.listen(4000, () => {
  console.log('Running on http://localhost:4000');
});
