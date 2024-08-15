import { useReducer, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// useReducer를 이용하면 상태를 업데이트하는 로직을 모아서 컴포넌트 바깥에 둘 수 있는 장점이 존재. 성능상으론 useState의 함수형 업데이트와 비슷하다.
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      // {type: 'INSERT', todo: {id: 1, text: 'todo', checked: false}}
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': // 토글
      // {type: 'TOGGLE', id: 1}
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

function App() {
  // 각 todo 항목의 고유 id, 내용, 완료 여부를 알려주는 값이 포함
  // undefined, createBulkTodos 순서로 파라미터를 전달하여 컴포넌트 초기 렌더링 시에만 createBulkTodos 함수가 호출되도록 설정
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고윳값으로 사용될 id - ref를 사용해 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // 다음 todo에 사용하기 위해 nextId 값 1씩 증가
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
