import { REQUEST_CONTACTS } from '_js/constants/actionTypes';

const defaultState = {
  isFetching: false,
  fetchFailed: false,
  contactsList: []
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_CONTACTS:
      return Object.assign({}, defaultState, { isFetching: true })
    default:
      return state;
  }
}
