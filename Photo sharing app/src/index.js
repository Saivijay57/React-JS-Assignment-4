import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Route,Switch } from 'react-router-dom';
import {
    BrowserRouter ,
  } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Nextpage from './Components/Nextpage';
ReactDOM.render(
  <BrowserRouter>
    <Nextpage/>
  </BrowserRouter>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
