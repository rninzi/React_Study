import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  // 액션 생성 함수로 이뤄진 객체 형태로 넣어줘도 된다. 이때 connect 함수 내부적으로 bindActionCreators 작업을 대신해준다.
  {
    increase,
    decrease,
  },
)(CounterContainer);
