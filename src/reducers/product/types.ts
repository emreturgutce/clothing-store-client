import { Action } from 'redux';
import { ProductActionTypes } from '../../actions';

export interface ProductState {
  isLoading: boolean;
  products: any[];
  errors: string[];
}

export interface ProductAction extends Action<ProductActionTypes> {
  payload?: {
    products?: any[];
    error?: string;
  };
}
