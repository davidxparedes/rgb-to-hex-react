import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './js/App';
import './css/index.css';
// import Router from './js/Router';
import reportWebVitals from './reportWebVitals';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
