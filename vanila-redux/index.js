// 스토어 만들기 (declared됐는데 대체 방안 찾아보기)
import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 고유한 액션 이름 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수 정의 (액션 이름으로 액션 객체를 만듦 / type값은 필수)
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지 필요
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

// render 함수 만들기 (상태 업데이트 시마다 호출 → 리액트의 render()와 달리 이미 html을 사용해 만들어진 UI 속성을 상태에 따라 변경)
const render = () => {
  const state = store.getState(); // 현재 상태 불러오기
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();
store.subscribe(render); // 구독하기 (store의 상태가 바뀔 때마다 render 함수가 호출되도록 함)

// 액션 발생시키기
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
