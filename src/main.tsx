import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import 'antd/dist/reset.css'; // ✅ keep this for Ant Design

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
