import Cookies from 'js-cookie';
import { AuthActionTypes } from '../../actions/types';
import { AuthAction, AuthState } from './types';

const initialState: AuthState = {
  token: Cookies.get('auth_token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export function authReducer(
  state = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case AuthActionTypes.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: {
          id: action.payload?.id,
        },
        isAuthenticated: true,
        isLoading: false,
      };
    case AuthActionTypes.AUTH_FAIL:
    case AuthActionTypes.LOGIN_FAIL:
    case AuthActionTypes.REGISTER_FAIL:
    case AuthActionTypes.LOGOUT_SUCCESS:
      Cookies.remove('auth_token');
      return {
        ...state,
        token: undefined,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
