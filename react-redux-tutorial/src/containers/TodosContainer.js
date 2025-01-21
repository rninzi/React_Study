import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = () => {
  // 비구조화 할당 문법 적용
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  // 액션 종류가 많아 어떤 값이 액션 생성 함수의 파라미터로 사용돼야 하는지 일일이 명시해줘야하는 번거로움 존재
  const onChangeInput = useCallback(
    (input) => dispatch(changeInput(input)),
    [dispatch],
  );
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;
