import reducer, { defaultState } from './reducer';

describe('Contacts List reducer', () => {

  it('should return default state object if no store is provided', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  })
  
  it('should add user', () => {
    const newStore = reducer(
      undefined, {
        type: "ADD_CONTACT",
        data: {
          username: "Andriy"
        }
      });

    expect(newStore.contactsList).toHaveLength(1);
    expect(newStore.contactsList[0].id).toBeDefined();
  })
  
  it('should toggle favorite state for the user', () => {
    const testState = Object.assign({}, defaultState, {
      contactsList: [{
        id: 0,
        favorie: false
      }]
    });
    expect(reducer(testState, {
      type: "TOGGLE_FAVORITE",
      id: 0
    }).contactsList[0].favorite).toBeTruthy();
  })
})
