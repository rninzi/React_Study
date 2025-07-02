import { Outlet } from 'react-router-dom';

const PostListPage = () => {
  return (
    <div>
      포스트 리스트
      <Outlet />
    </div>
  );
};

export default PostListPage;
