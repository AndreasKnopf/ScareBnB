import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import ScrollRestoration from './components/Shared/ScrollRestoration/ScrollRestoration.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollRestoration />
      <App />
    </HashRouter>
  </StrictMode>
);
