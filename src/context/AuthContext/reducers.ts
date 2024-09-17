import  Cookies from 'js-cookie';
import { AuthAction, AuthState } from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: null };

    case 'LOGIN_SUCCESS':
      Cookies.set('isAuthenticated', 'true', { expires: 1, secure: true, sameSite: 'strict' });
      return { ...state, isAuthenticated: true, loading: false, error: null };

    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.error };

    case 'LOGOUT_REQUEST':
      return { ...state, loading: true, error: null };

    case 'LOGOUT_SUCCESS':
      Cookies.remove('isAuthenticated');
      return { ...state, isAuthenticated: false, loading: false, error: null };

    case 'LOGOUT_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'SET_AUTHENTICATED':
      return { ...state, isAuthenticated: true, loading: false, error: null };

    default:
      return state;
  }
};
