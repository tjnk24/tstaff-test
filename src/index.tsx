import 'antd/dist/antd.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '@components/app';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(app, document.getElementById('root'));
