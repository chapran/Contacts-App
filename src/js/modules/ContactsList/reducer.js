import {
  REQUEST_CONTACTS,
  LOAD_CONTACTS,
  SHOW_ERROR,
  TOGGLE_FAVORITE,
  DELETE_CONTACT,
  ADD_CONTACT
} from '_js/constants/actionTypes';

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
    case DELETE_CONTACT:
      const contactIdx = state.contactsList.findIndex(item => item.id === action.id);
      return Object.assign({}, state, {
        contactsList: [
          ...state.contactsList.slice(0, contactIdx),
          ...state.contactsList.slice(contactIdx + 1, state.contactsList.length)
        ]
      })
    case ADD_CONTACT:
      action.data.id = Date.now();
      return Object.assign({}, state, { contactsList: [...state.contactsList, action.data] })
    default:
      return state;
  }
}
