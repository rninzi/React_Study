import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 두 함수에서 반환하는 객체 내부의 값들이 컴포넌트의 props로 전달된다.
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) => bindActionCreators({ increase, decrease }, dispatch),
)(CounterContainer);
