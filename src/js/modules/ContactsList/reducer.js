import { REQUEST_CONTACTS, LOAD_CONTACTS, SHOW_ERROR } from '_js/constants/actionTypes';

const defaultState = {
  isFetching: false,
  fetchFailed: false,
  contactsList: []
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_CONTACTS:
      return Object.assign({}, state, { isFetching: true })
    case SHOW_ERROR: 
      return Object.assign({}, state, {
        isFetching: false,
        fetchFailed: true
      })
    case LOAD_CONTACTS:
      return Object.assign({}, state, {
        isFetching: false,
        contactsList: action.data
      })
    default:
      return state;
  }
}
