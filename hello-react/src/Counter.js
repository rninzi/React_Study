import { Component } from 'react';

export class Counter extends Component {
  // state를 constructor에서 꺼내어 설정하는 방식
  state = {
    number: 0,
    fixedNumber: 0,
  };

  /* // constructor 메서드를 작성해 컴포넌트에 state를 설정한다.
  constructor(props) {
    super(props); // constructor 내부에서 무조건 호출할 것
    this.state = {
      number: 0, // state 초깃값 설정
      fixedNumber: 0,
    };
  } */

  render() {
    const { number, fixedNumber } = this.state; // 현재 state를 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        {/* <button onClick={() => this.setState({ number: number + 1 })}> // this.state 사용 시 객체를 사용하는 방식 */}

        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              // this.setState가 끝난 후 특정 작업 실행
              console.log('방금 setState 호출! ');
              console.log(this.state);
            });

            /* this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
            this.setState((prevState) => ({ number: prevState.number + 1 })); // 함수에서 바로 객체를 반환하는 형태
            // 위 두 코드는 완전히 똑같은 기능 */
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
