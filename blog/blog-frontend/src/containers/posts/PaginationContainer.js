import Pagination from '../../components/posts/Pagination';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = () => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));
  const params = useParams();
  const location = useLocation();

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여 주지 않음
  if (!posts || loading) return null;
  const username = params.username;

  // page가 없으면 1을 기본값으로 사용
  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;
