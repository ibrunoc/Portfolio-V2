import React from 'react';

import ReactDOM from 'react-dom/client';
import { Router } from "./router";

import ThemeProvider from './Common/Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
  <ThemeProvider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
    </ThemeProvider>
);