import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

// import plantsMiddleware from 'src/middlewares/plantsMiddleware';

const enhancer = composeWithDevTools(
  applyMiddleware(
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer,
);

export default store;
