import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery/dist/jquery';
import App from './components/App';
import 'fomantic-ui-css/semantic.css';
import './index.css';

window.jQuery = window.$ = $;
require('fomantic-ui-css/semantic.js');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);