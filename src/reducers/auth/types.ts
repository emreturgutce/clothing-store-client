import { Action } from 'redux';
import { AuthActionTypes } from '../../actions';

export interface AuthState {
  token?: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: {
    id?: string;
  } | null;
}

export interface AuthAction extends Action<AuthActionTypes> {
  payload?: {
    token?: string;
    id?: string;
  };
}
