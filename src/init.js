// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import rootReducer from './reducers';
// import faker from 'faker';

// import cookies from 'js-cookie';
// import io from 'socket.io-client';
import App from './components/App.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

export default () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  ReactDOM.render(
      <Provider store={store}>
        <App/>,
      </Provider>,
      document.getElementById('chat'),
  );
};
