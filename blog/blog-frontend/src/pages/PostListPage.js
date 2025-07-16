import { Outlet } from 'react-router-dom';
import HeaderContainer from '../containers/common/HeaderContainer';

const PostListPage = () => {
  return (
    <>
      <Outlet />
      <HeaderContainer />
      <div>안녕하세요.</div>
    </>
  );
};

export default PostListPage;
