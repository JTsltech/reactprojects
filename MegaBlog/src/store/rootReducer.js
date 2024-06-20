import { combineReducers } from 'redux';
import userReducer from './authSlice';
import postReducer from './postSlice';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
});


export default rootReducer;