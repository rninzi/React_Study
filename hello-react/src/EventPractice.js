import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };
  
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); // this가 EventPractice 컴포넌트 자신을 가리키기 위해서 메서드를 this와 binding!
    this.handleClick = this.handleClick.bind(this); // 메서드 바인딩은 constructor에서 하는 것이 정석!
  }

  handleChange (e) {
    this.setState({
      message: e.target.value
    });
  }

  handleClick () {
    alert(this.state.message);
    this.setState({ message: '' });
  }

  render () {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleClick}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
