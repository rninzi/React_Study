import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

/* 액션 생성 함수를 "액션을 디스패치하는 함수"로 변환해준다.
   액션 생성 함수를 사용해 액션 객체 만들기 → 스토어에 디스패치 작업을 해주는 함수를 자동으로 생성하는 역할
   useActions(액션 생성 함수로 이뤄진 배열, deps 배열(배열 안에 들어있는 원소가 바뀌면 액션을 디스패치하는 함수를 만든다.)) */
export default function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps,
  );
}
