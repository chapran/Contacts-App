import { Map, List } from 'immutable';

import {
  REQUEST_CONTACTS,
  LOAD_CONTACTS,
  SHOW_ERROR,
  TOGGLE_FAVORITE,
  DELETE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT
} from '_js/constants/actionTypes';

const defaultState = Map({
  isFetching: false,
  fetchFailed: false,
  contactsList: List()
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_CONTACTS:
      return state.update("isFetching", value => true)
    case SHOW_ERROR:
      return state.merge({
        isFetching: false,
        fetchFailed: true
      })
    case LOAD_CONTACTS:
      return state.merge({
        isFetching: false,
        contactsList: List(action.data)
      })
    case TOGGLE_FAVORITE:
      return state.update('contactsList', list => list.update(
        list.findIndex(item => item.id === action.id),
        item => ({ ...item, favorite: !item.favorite })
      ))
    case DELETE_CONTACT:
      return state.update('contactsList', list => list.delete(
        list.findIndex(item => item.id === action.id)
      ))
    case ADD_CONTACT:
      return state.update('contactsList', list => list.push(action.data))
    case EDIT_CONTACT:
      return state.update('contactsList', list => list.update(
        list.findIndex(item => item.id === action.id),
        item => ({ ...action.data, id: action.id })
      ))
    default:
      return state;
  }
}
