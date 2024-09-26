import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { rootReducer } from './reducers/rootReducer';
import { Map } from 'immutable';


// Setting up Redux DevTools extension with Thunk middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  Map(),
  composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);