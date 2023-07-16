import './index.css';

/* eslint-disable import/default */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* eslint-enable */
import App from './App.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
