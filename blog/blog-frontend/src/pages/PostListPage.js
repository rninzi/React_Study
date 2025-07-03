import { Outlet } from 'react-router-dom';
import Button from '../components/common/Button';

const PostListPage = () => {
  return (
    <div>
      <Outlet />
      <Button>버튼</Button>
    </div>
  );
};

export default PostListPage;
