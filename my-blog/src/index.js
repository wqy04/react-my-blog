import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Article from './components/Article/Article';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
          {
            index: true, 
            element: <div>这里是首页内容</div>
          },
          {
            path: 'posts',
            element: <Article />
          },
          {
            path: 'about',
            element: <div>这里是关于页</div>
          }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

