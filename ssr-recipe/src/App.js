import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import loadable from '@loadable/component';
const RedPage = loadable(() => import('./pages/RedPage'));
const BluePage = loadable(() => import('./pages/BluePage'));
const UsersPage = loadable(() => import('./pages/UsersPage'));

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
