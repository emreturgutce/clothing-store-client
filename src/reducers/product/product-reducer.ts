import { ProductActionTypes } from '../../actions';
import { ProductAction, ProductState } from './types';

const initialState: ProductState = {
  isLoading: false,
  products: [],
  errors: [],
};

export function productReducer(
  state = initialState,
  action: ProductAction,
): ProductState {
  switch (action.type) {
    case ProductActionTypes.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ProductActionTypes.LOADING_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: action.payload?.error ? [action.payload?.error] : [],
      };
    case ProductActionTypes.LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload?.products || [],
      };
    default:
      return state;
  }
}
