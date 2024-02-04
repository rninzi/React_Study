import { useState } from 'react';

export const EventPractice = () => {
  // input의 개수가 여러개라면 e.target.name을 활용하는 방식으로 가는 것이 유용
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const { username, message } = form;

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  // const [username, setUserName] = useState('');
  // const [message, setMessage] = useState('');

  // const onChangeUserName = e => setUserName(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({ username: '', message: '' });
  };

  const onKeyUp = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text"
             name="username"
             placeholder="사용자명"
             value={username}
             onChange={onChange}
      />
      <input type="text"
             name="message"
             placeholder="아무거나 입력해 보세요"
             value={message}
             onChange={onChange}
             onKeyUp={onKeyUp}
      />
      <button onClick={onClick}>확인</button>
    </div>);
};