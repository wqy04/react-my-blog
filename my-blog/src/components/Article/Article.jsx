import './Article.css'
import { useState } from 'react'; // 引入 useState
import { articles } from '../../data';

function Article() {
    const [selectedArticle, setSelectedArticle] = useState(null);
  
    return (
      <div className="article-container"> {/* 新增容器 */}
        {/* 左侧文章列表 */}
        <ul className="article-list">
          {articles.map(article => (
            <li 
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className={`article-item ${selectedArticle?.id === article.id ? 'active' : ''}`}
            >
              标题：{article.title}<br />
              发布日期：{article.date}<br />
              摘要：{article.summary}<br />
            </li>
          ))}
        </ul>
  
        {/* 右侧文章详情 */}
        <div className="article-detail">
          {selectedArticle ? (
            <div>
            <h2>{selectedArticle.title}</h2>
            <div>
              <span>发布日期：{selectedArticle.date}</span>
            </div>
            <div >
              {selectedArticle.content}
            </div>
          </div>
          ) : (
            <div className="article-placeholder">📰 请点击左侧文章查看详情</div>
          )}
        </div>
      </div>
    );
  }
export default Article;