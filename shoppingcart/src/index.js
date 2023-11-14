import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import   '../node_modules/bootstrap/dist/css/bootstrap.css';
  import   '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Register } from './Register/Register';
import { NetflixIndex } from './netflix-index/netflix-index'; 
import { DataBinding } from './data-binding/data-binding';
const root = ReactDOM.createRoot(document.getElementById('root'));
// <DataBinding/>
root.render(
  <React.StrictMode>
    <DataBinding/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
