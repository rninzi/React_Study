import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import { Preloader } from '../lib/PreloadContext';
import { getUser } from '../modules/users';
import { useParams } from 'react-router-dom';

const UserContainer = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id === parseInt(id, 0)) return; // 사용자 존재 & id 일치한다면 요청 X
    dispatch(getUser(id));
  }, [dispatch, id, user]); // id가 바뀔 때 새로 요청해야 함

  // 컨테이너 유효성 검사 후 return null을 해야 하는 경우에 null 대신 Preloader 반환
  // 이렇게 하면 서버 사이드 렌더링 과정에서 데이터가 없을 때 GET_USER 액션을 발생시킴
  if (!user) {
    return <Preloader resolve={() => dispatch(getUser(id))} />;
  }
  return <User user={user} />;
};

export default UserContainer;
