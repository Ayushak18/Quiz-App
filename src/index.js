import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Quiz from './component/quiz';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/quiz/:difficulty/:id" component={Quiz}></Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
