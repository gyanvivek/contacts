import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const a11y = require('react-a11y').default;
a11y(React, ReactDOM, {
  rules: {
    'img-uses-alt': 'warn',
    'img-redundant-alt': ['warn', ['image', 'photo', 'foto', 'bild']],
    // ...
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
