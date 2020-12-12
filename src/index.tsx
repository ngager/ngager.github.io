import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './components/app/App';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";
import './scss/spacing.scss'

const applicationProps = {
    appStyles: 'mlra mtb10px'
};

const routing = (
    <div>
        <Header />
        <App {...applicationProps} />
        <Footer />
    </div>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
