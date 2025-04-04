import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" Component={RedPage} />
        <Route path="/blue" Component={BluePage} />
        <Route path="/users/*" Component={UsersPage} />
      </Routes>
    </div>
  );
}

export default App;
