import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/app/app';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
console.log('Your process.env.PUBLIC_URL', process.env.PUBLIC_URL);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
