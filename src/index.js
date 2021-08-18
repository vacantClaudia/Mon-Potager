// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import store
import store from 'src/store';

// == Import component App
import App from 'src/components/App';

// == Root
const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

// == DOM Target
const target = document.getElementById('root');

// == React render
render(rootReactElement, target);
