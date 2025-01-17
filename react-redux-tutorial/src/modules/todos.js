import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

// 액션 생성 함수 만들기
/* createAction으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용한다. 
  기본적으로 액션 생성 함수에서 받아 온 파라미터 그대로 담기며 변형을 주고 싶을 땐 createAction의 두 번쨰 함수에 payload를 정의하는 함수를 따로 선언해 넣어주면 된다. */
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert 호출 시마다 1씩 더해진다.
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// id => id 와 같은 형태는 파라미터를 그대로 반환하므로 생략해도 똑같이 작동한다.
export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

const todos = handleActions(
  // 파라미터에 action을 넘겨 action.payload로 접근하는 것보다 객체 비구조화 할당 문법을 적용해 action 값의 payload 이름을 새로 설정해주면 더 명확한 의미가 전달된다.
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({
      ...state,
      input: input,
    }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState,
);

export default todos;
