import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

/* 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨준다.
state(현재 스토어가 지닌 상태)를 파라미터로 받아온다. */
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

/* 액션 생성 함수를 컴포넌트의 props로 넘겨준다.
 dispatch(store의 내장 함수)를 파라미터로 받아온다. */
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

// 두 함수에서 반환하는 객체 내부의 값들이 컴포넌트의 props로 전달된다.
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

/* 일반적으로는 mapStateToPros, mapDispatchToProps 함수를 따로 선언해 놓고 사용하지만, 
아래와 같이 connect 함수 내부에 익명 함수 형태로 선언해도 문제가 없다. 취향껏 사용하자. */
/* export default connect(
    state => ({
        number: state.counter.number,
    }), dispatch => ({
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease()), // decrease: () => { return dispatch(decrease()) },와 동일
    }),
)(CounterContainer); */
