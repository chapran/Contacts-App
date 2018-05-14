/*eslint no-unused-vars: 0*/

import { UPDATE_SEARCH } from '_js/constants/actionTypes';

export const searchBarReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.text
    default:
      return ''
  }
}
