import {
  REQUEST_CONTACTS,
  LOAD_CONTACTS,
  SHOW_ERROR,
  TOGGLE_FAVORITE,
  DELETE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT,
  UPDATE_SNACKBAR,
  UPDATE_SEARCH
} from '_js/constants/actionTypes';
import { CONTACTS_URL } from '_js/constants/endpoints';

export const requestContacts = () => ({
  type: REQUEST_CONTACTS
})

export const setError = () => ({
  type: SHOW_ERROR
})

export const loadContacts = data => {
  data.forEach(item => {
    item.dateOfBirth = new Date(item.dateOfBirth)
  });
  return {
    type: LOAD_CONTACTS,
    data
  }
}

export const fetchContacts = () => async (dispatch) => {
  dispatch(requestContacts());

  const res = await fetch(CONTACTS_URL);
  if (res.status !== 200) {
    dispatch(setError());
  } else {
    const parsedData = await res.json();

    // just a simulation of slower connection
    setTimeout(() => {
      dispatch(loadContacts(parsedData))
    }, 2000)
  }
}

export const toggleFavorite = id => ({
  type: TOGGLE_FAVORITE,
  id
})

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  id
})

export const addContact = data => {
  data.id = Date.now();
  return {
    type: ADD_CONTACT,
    data
  }
}

export const editContact = (id, data) => ({
  type: EDIT_CONTACT,
  id, data
})

export const updateSnackbar = message => ({
  type: UPDATE_SNACKBAR,
  message
})

export const updateSearch = text => ({
  type: UPDATE_SEARCH,
  text
})
