import {
  REQUEST_CONTACTS,
  LOAD_CONTACTS,
  SHOW_ERROR,
  TOGGLE_FAVORITE,
  DELETE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT
} from '_js/constants/actionTypes';

const defaultState = {
  isFetching: false,
  fetchFailed: false,
  contactsList: []
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_CONTACTS:
      return { ...state, isFetching: true }
    case SHOW_ERROR:
      return {
        ...state,
        isFetching: false,
        fetchFailed: true
      }
    case LOAD_CONTACTS:
      return {
        ...state,
        isFetching: false,
        contactsList: action.data
      }
    case TOGGLE_FAVORITE:
      const contactsList = state.contactsList.map(item => {
        return item.id === action.id ? { ...item, favorite: !item.favorite } : item
      })
      return { ...state, contactsList }
    case DELETE_CONTACT:
      return {
        ...state,
        contactsList: state.contactsList.filter(item => item.id !== action.id),
      }
    case ADD_CONTACT:
      return { ...state, contactsList: [...state.contactsList, action.data] }
    case EDIT_CONTACT:
      return {
        ...state,
        contactsList: state.contactsList.map(item => {
          return item.id === action.id ? { ...action.data, id: action.id } : item
        })
      }
    default:
      return state;
  }
}
