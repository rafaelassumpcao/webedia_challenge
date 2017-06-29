/**
 * The main entry of the application
 * it is responsible to render the hole app into the body doc identified by id='root'
 */
import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.scss'
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));