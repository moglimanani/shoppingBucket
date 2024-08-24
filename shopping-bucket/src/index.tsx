import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootEl = document.getElementById('root') as HTMLElement;
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('error');
}
