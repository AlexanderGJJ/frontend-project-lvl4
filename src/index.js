// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
// import faker from 'faker';
// eslint-disable-next-line import/no-unresolved
import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
import App from './App.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

// const ext = window.__REDUX_DEVTOOLS_EXTENSION__;

ReactDOM.render(
    <App data={gon} />,
    document.getElementById('chat'),
);

console.log('gon', gon);
