import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = () => {
    // import() 함수 형태로 메서드 안에서 사용 시 빌드 폴더 내에서 파일을 따로 분리시켜서 저장한다. 또한 실제 함수가 필요한 지점에 파일을 불러와 함수를 사용할 수 있다.
    // dynamic import
    import('./notify').then((result) => result.default());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
