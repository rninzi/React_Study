import { useState } from 'react';

export const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    /* push가 아닌 concat 사용 이유?
    React에서 상태 업데이트 시엔 기존 상태를 그대로 유지하면서 새로운 값을 상태로 설정해야한다. 불변성 유지를 해야 나중에 리액트 컴포넌트 성능 최적화 가능 */
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = id => {
    /* filter? 불변성 유지하며 배열의 특정 원소를 지울 때 사용
       배열에서 함수 내부에 적힌 특정 조건을 >만족<하는 원소들만 쉽게 분류 가능 */
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  // key 값은 항상 unique한 값으로 설정할 것! key값이 중복되면 렌더링 시 오류 발생
  const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};