import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'

import { contactsReducer as contacts } from './modules/ContactsList';
import { snackbarReducer as snackbar } from './modules/AppSnackbar';
import { searchBarReducer as searchState } from './modules/SearchBar';

export default combineReducers({
  contacts,
  form: reduxFormReducer,
  snackbar,
  searchState
});
