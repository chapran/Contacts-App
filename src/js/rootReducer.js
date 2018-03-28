import { combineReducers } from 'redux';

import { contactsReducer as contacts } from './modules/ContactsList';

export default combineReducers({
  contacts
});
