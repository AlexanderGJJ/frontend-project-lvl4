// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import io from 'socket.io-client';
import App from './components/App.jsx';
import rootReducer from './reducers';
import userData from './components/UserContext.jsx';

const initApp = () => {
  if (process.env.NODE_ENV !== 'production') {
    localStorage.debug = 'chat:*';
  }

  const { name, userContext } = userData;
  const store = configureStore({
    reducer: rootReducer,
  });

  ReactDOM.render(
      <Provider store={store}>
        <userContext.Provider value={name}>
          <App/>
        </userContext.Provider>
      </Provider>,
      document.getElementById('chat'),
  );
};

export default initApp;
