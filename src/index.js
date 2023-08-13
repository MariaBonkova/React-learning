import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {State} from './State'
import {Timer} from "./Timer";
import {Clicker} from "./Clicker";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <App />
      <State price={12} name='pesho'/>
      <Clicker />
      <Timer/>
  </div>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
