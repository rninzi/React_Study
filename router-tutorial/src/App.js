import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* index props는 path="/"와 동일*/}
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* *는 아무 텍스트나 매칭한다는 뜻, 상단에 위치하는 라우트와 일치하는 라우트가 없는 경우 Not Found Page 출력 */}
    </Routes>
  );
};

export default App;
