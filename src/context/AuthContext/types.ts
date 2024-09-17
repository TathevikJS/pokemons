export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface AuthAction {
  type: 'LOGIN_REQUEST' | 'LOGIN_SUCCESS' | 'LOGIN_FAILURE' | 'LOGOUT_REQUEST' | 'LOGOUT_SUCCESS' | 'LOGOUT_FAILURE' | 'SET_AUTHENTICATED';
  payload?: any,
  error?: any
}

  
  export interface AuthContextType {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
  }
  