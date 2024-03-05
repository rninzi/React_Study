import { useReducer } from 'react';

function reducer (state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInputs (initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = e => {
    dispatch(e.target); // useReducer에서의 액션은 그 어떤 값도 사용 가능. 이벤트 객체가 지닌 e.target 값 자체를 액션 값으로 사용
  };

  return [state, onChange];
}