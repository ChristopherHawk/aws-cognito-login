import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import Routes from './Routes/index';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
