import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    navigate('/articles', { replace: true }); // replace 옵션: 현재 페이지를 페이지 기록에 남길지 여부
  };

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>Header</header>
      <button onClick={goBack}>뒤로 가기</button>
      <button onClick={goArticles}>게시글 목록</button>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
