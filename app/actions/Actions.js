import * as types from '../constants/ActionTypes';

export function addAccount(account) {
  return (dispatch) => {
    dispatch({ type: types.ADD_ACCOUNT, payload: account });
  };
}

export function deleteAccount(index) {
  return (dispatch) => {
    dispatch({ type: types.DELETE_ACCOUNT, payload: index });
  };
}
