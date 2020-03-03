import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { dom } from "@fortawesome/fontawesome-svg-core";


ReactDOM.render(<App />, document.getElementById('root'));
dom.watch();