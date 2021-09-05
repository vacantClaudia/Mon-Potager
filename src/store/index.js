import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

import plantsMiddleware from 'src/middlewares/plantsMiddleware';
import plantsListMiddleware from 'src/middlewares/plantsListMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import eventsMiddleware from '../middlewares/eventsMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(
    plantsMiddleware,
    plantsListMiddleware,
    authMiddleware,
    eventsMiddleware,
  ),

);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer,
);

export default store;
