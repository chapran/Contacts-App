import { REQUEST_CONTACTS, LOAD_CONTACTS, SHOW_ERROR, TOGGLE_FAVORITE } from '_js/constants/actionTypes';

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
    case TOGGLE_FAVORITE:
      const changedContactIdx = state.contactsList.findIndex(item => item.id === action.id);
      const contactsList = [
        ...state.contactsList.slice(0, changedContactIdx),
        Object.assign(
          {},
          state.contactsList[changedContactIdx],
          { favorite: !state.contactsList[changedContactIdx].favorite }
        ),
        ...state.contactsList.slice(changedContactIdx + 1, state.contactsList.length)
      ];
      return Object.assign({}, state, { contactsList })
    default:
      return state;
  }
}
