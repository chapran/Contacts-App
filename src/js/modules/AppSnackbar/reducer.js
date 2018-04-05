import { UPDATE_SNACKBAR } from '_js/constants/actionTypes';

export default function (state = {show: false, message: ''}, action) {
  switch (action.type) {
    case UPDATE_SNACKBAR:
      return {
        message: action.message,
        show: true
      }
    default:
      return state
  }
}
