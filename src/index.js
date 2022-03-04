import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './config/Routes';



ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

