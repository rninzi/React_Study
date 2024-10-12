import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation(); // 현재 사용자가 보고 있는 페이지의 정보를 지님

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>쿼리스트링: {location.search}</p> {/* 맨 앞의 ? 문자를 포함한 쿼리스트링 값 */}
    </div>
  );
};

export default About;
