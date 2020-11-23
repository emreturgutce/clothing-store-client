import { Action } from 'redux';
import { AuthActionTypes } from '../../actions';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: {
    id?: string;
    name?: string;
  } | null;
}

export interface AuthAction extends Action<AuthActionTypes> {
  payload?: {
    id?: string;
    name?: string;
  };
}
