import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'

import { contactsReducer as contacts } from './modules/ContactsList';

export default combineReducers({
  contacts,
  form: reduxFormReducer
});
