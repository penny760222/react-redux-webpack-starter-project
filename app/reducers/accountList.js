import * as types from '../constants/ActionTypes';

const initialState = ['UserA', 'UserB', 'UserC'];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_ACCOUNT:
      return [...state, action.payload];
      
    case types.DELETE_ACCOUNT:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];

    default:
      return state;
  }
}
