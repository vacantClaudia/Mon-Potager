// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// == Import store
import store from 'src/store';

// == Import component App
import App from 'src/containers/App';

// == Root
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// == DOM Target
const target = document.getElementById('root');

// == React render
render(rootReactElement, target);
