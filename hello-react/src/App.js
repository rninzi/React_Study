import { Component } from 'react';
import { ScrollBox } from './ScrollBox';

class App extends Component {
  render () {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox = ref} /> {/* 컴포넌트에 ref를 달면 내부 메서드 및 멤버 변수 접근 가능 */}
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        {/*
        onClick={this.scrollBox.scrollToBottom}의 경우 초기 렌더링 시 this.scrollBox가 undefined라 오류 발생
        따라서 화살표 함수 문법 사용해 새 함수 만들고 내부에서 메서드 실행해주기
        -> 버튼을 누르면 이미 한 번 렌더링 해서 this.scrollBox를 설정한 시점이라 오류없이 실행 가능
        */}
      </div>
    );
  }
}

export default App;
