import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    // middlewares
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
