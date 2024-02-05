import React from 'react';
import { Component } from 'react';
import './ValidationSample.css';

export class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  // ref 설정 방식 2 - createRef 사용
  input = React.createRef();

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.input.current.focus();
  };

  render () {
    return (
      <div>
        <input
          // ref={(ref)=>this.input=ref} // ref 설정 방식 1 - ref 콜백함수 사용
          ref={this.input}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
};