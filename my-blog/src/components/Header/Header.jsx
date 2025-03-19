import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <nav className="nav">
        <Link to="/" className="nav-link">首页</Link>
        <Link to="/posts" className="nav-link">文章</Link>
        <Link to="/about" className="nav-link">关于</Link>
      </nav>
    </div>
  );
}


export default Header;