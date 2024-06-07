import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
//combineReducers is used  to merges them into a single root reducer
const rootReducer = combineReducers({
  cart: cartReducer
});

export default rootReducer;
