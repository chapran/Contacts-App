import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { fetchContacts } from './actions';

const store =  createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;

store.dispatch(fetchContacts());
