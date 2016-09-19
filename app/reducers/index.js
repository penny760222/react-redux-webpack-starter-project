import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import accountList from './accountList';

const rootReducer = combineReducers({
  routing : routerReducer,
  form: formReducer,
  accountList
});

export default rootReducer;
