import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import   '../node_modules/bootstrap/dist/css/bootstrap.css';
  import   '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Register } from './Register/Register';
import { NetflixIndex } from './netflix-index/netflix-index'; 
import { DataBinding } from './data-binding/data-binding';
import FormValidation from './FormValidation/FormValidation';
import { StyleBinding } from './StyleBinding/StyleBinding';
import { ClassBinding } from './StyleBinding/ClassBinding';
import { EventBinding } from './StyleBinding/EventBinding'; 
import { PasswordStrongorWeek } from './Task1_Meter/PasswordStrongorWeek';
import { Event_Binding } from './StyleBinding/event-binding'; 
import { MouseOver } from './SyntheticEvents/MouseOver';
import { Event_onMouseOut } from './SyntheticEvents/onMouseOut';
import { Event_onMouseMove } from './SyntheticEvents/onMouseMove';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> 
  {
    /*
    <DataBinding/>
    <FormValidation/>
    <Register/>
    <Register/>
    <StyleBinding/>
    <ClassBinding/>
    <EventBinding/>
    <PasswordStrongorWeek/>
    <Event_Binding/>
    <MouseOver/> 
    <Event_onMouseOut/>
    */
  } 
  <MouseOver/> 
  <Event_onMouseMove/>
  

  </React.StrictMode>
);
 
