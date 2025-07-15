import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';

const PostListPage = () => {
  return (
    <>
      <Outlet />
      <Header />
      <div>안녕하세요.</div>
    </>
  );
};

export default PostListPage;
