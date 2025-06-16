import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/globals.css';

import ReactGA from 'react-ga4';
import { HelmetProvider } from 'react-helmet-async';

// ✅ Initialize Google Analytics
ReactGA.initialize("G-GFPJZR3GR5");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
