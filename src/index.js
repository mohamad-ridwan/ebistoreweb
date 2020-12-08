import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import firebase from './config/firebase';
import { Provider } from 'react-redux';
import { store } from './config/redux';
import ContextWrapper from './config/context/ContextWrapper.jsx';

ReactDOM.render(
  <ContextWrapper>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ContextWrapper>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
