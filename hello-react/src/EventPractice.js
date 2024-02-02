import { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  /*
    // 메서드 바인딩 (1) - 기본 방식 (constructor 사용)
      constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this); // this가 EventPractice 컴포넌트 자신을 가리키기 위해서 메서드를 this와 binding!
        this.handleClick = this.handleClick.bind(this); // 메서드 바인딩은 constructor에서 하는 것이 정석!
      }
      // 새 메서드 만들 때마다 constructor를 수정해줘야 하는 불편함 존재.
     */

  // 메서드 바인딩 (2) - Property Initializer Syntax 사용 (1)보다 훨씬 간단, 간편!
  handleChange = (e) => {
    // 바벨의 transform-class-properties 문법 사용해 화살표 함수 형태로 메서드 정의 (바인딩 효과)
    this.setState({
      [e.target.name]: e.target.value, // 객체 안에서 key를 대괄호[]로 감싸면 그 안에 넣은 레퍼런스(e.target.name)이 가리키는 실제 값이 key 값으로 사용됨.
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({ username: '', message: '' });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
