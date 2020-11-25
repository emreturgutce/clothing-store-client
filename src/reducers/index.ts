import { combineReducers } from 'redux';
import { authReducer } from './auth/auth-reducer';
import { productReducer } from './product/product-reducer';

export default combineReducers({
  auth: authReducer,
  product: productReducer,
});
