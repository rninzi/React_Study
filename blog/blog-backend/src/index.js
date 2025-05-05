const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 라우터 설정 - router.해당 라우트에서 사용 할 HTTP 메서드(이동 경로, 해당 라우트에 적용할 미들웨어 함수)
router.get('/', (ctx) => {
  ctx.body = '홈';
});
router.get('/about', (ctx) => {
  ctx.body = '소개';
});

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
