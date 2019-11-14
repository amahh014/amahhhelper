import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import orderReducer from './orderReducer';
import callReducer from './callReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  order: orderReducer,
  call: callReducer
});
