import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './components/app/App';
import './scss/spacing.scss'
import './scss/layout.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

library.add(fas, fab);

const applicationProps = {
    appStyles: 'mlra mtb10px'
};

const routing = (
    <div>
        <App {...applicationProps} />
    </div>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
