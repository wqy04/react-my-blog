// App.js
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <SideBar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;