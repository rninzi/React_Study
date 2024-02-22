import { Component } from 'react';

/*
* 상황에 따른 라이프사이클 메서드 실행 순서 *
초기 렌더링 시: constructor - getDerivedStateFromProps - render - componentDidMount
각 버튼 클릭 후 리렌더링 시: getDerivedStateFromProps - shouldComponentUpdate - getSnapshotBeforeUpdate - componentDidUpdate
 */

class LifeCycleSample extends Component {
  /* 컴포넌트 설명
     - 라이프사이클 메서드 실행 시 콘솔 디버거에 기록, 부모 컴포넌트에서 props로 색상을 받아 버튼을 누르면 state.number 값을 1씩 더한다. */

  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  // 컴포넌트의 생성자 메서드
  constructor (props) {
    super(props);
    console.log('constructor');
  }

  // props로 받은 값을 state에 동기화, 컴포넌트 마운트 or 업데이트 시 호출
  // 부모에게서 받은 color 값을 state에 동기화
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트 만들고 첫 렌더링을 다 마친 후 실행
  componentDidMount () {
    console.log('componentDidMount');
  }

  // props 또는 state 변경 시 리렌더링 시작 여부 지정
  // state.number 값의 마지막 자리 수가 4이면 리렌더링 취소
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4; // 숫자의 마지막 자리가 4면 리렌더링 X
  }

  // 컴포넌트를 DOM에서 제거할 때 실행
  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState(
      {
        number: this.state.number + 1
      });
  };

  // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
  // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 리렌더링 완료 후 실행 (업데이트가 끝난 직후), 컴포넌트가 이전에 가졌던 데이터(prevProps, prevState) 및 snapshot 값 접근 가능
  // getSnapshotBeforeUpdate에서 반환한 색상 속성을 조회
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  // 컴포넌트의 모양새를 정의 > 가장 중요한 + 유일한 필수 메서드 <
  // this.props와 this.state 접근 가능 & 리액트 요소 반환
  // * 주의 * 이벤트 설정이 아닌 곳에서 setState 사용 X, 브라우저 DOM 접근 X (DOM 정보 가져오거나 state 변화 줄 땐 componentDidMount에서 처리)
  render () {
    console.log('render');

    const style = {
      color: this.props.color
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => this.myRef = ref}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }

}

export default LifeCycleSample;