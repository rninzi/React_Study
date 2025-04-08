import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import { usePreloader } from '../lib/PreloadContext';
import { getUser } from '../modules/users';
import { useParams } from 'react-router-dom';

const UserContainer = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  // 함수형 컴포넌트에선 usePreloader Hook을 사용하면 된다.
  usePreloader(() => dispatch(getUser(id))); // 서버 사이드 렌더링을 할 때 API 호출하기
  useEffect(() => {
    if (user && user.id === parseInt(id, 0)) return; // 사용자 존재 & id 일치한다면 요청 X
    dispatch(getUser(id));
  }, [dispatch, id, user]); // id가 바뀔 때 새로 요청해야 함

  if (!user) return null;
  return <User user={user} />;
};

export default UserContainer;
