import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

import plantsMiddleware from 'src/middlewares/plantsMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(
    plantsMiddleware,
    authMiddleware,
  ),

);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer,
);

export default store;
