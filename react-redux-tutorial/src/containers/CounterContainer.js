import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  // useSelector 사용 시 connect를 사용하지 않고도 리덕스의 상태 조회 가능
  const number = useSelector((state) => state.counter.number);

  // 액션 디스패치 (컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용 가능하게 함)
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
};

export default CounterContainer;
