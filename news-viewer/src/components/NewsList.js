import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
    );
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 response 값이 설정되지 않았을 때 (map 사용 전에 검증 필요)
  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {/* 삭제된 기사 선필터링 로직 추가 */}
      {articles
        .filter((article) => article.title !== '[Removed]')
        .map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
    </NewsListBlock>
  );
};

export default NewsList;
