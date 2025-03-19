import './SideBar.css'
import { categories, tags } from '../../data';

function SideBar() {
    return (
      <div className="sidebar"> {/* 确保外层容器应用sidebar类 */}
        <h3>分类</h3>
        <ul className="category-list">
          {categories.map(category => (
            <li key={category} className="category-item">
              {category}
            </li>
          ))}
        </ul>
  
        <h3>标签云</h3>
        <ul className="tag-cloud">
          {tags.map(tag => (
            <li key={tag} className="tag-item">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    );
  }


export default SideBar;