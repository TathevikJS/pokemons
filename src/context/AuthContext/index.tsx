'use client'

import { createContext, useReducer, ReactNode, useEffect } from 'react';
import { AuthContextType, AuthState } from './types';
import { authReducer } from './reducers';
import Cookies from 'js-cookie';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const isUserAuthenticated = Cookies.get('isAuthenticated');
    if (isUserAuthenticated) {
      dispatch({ type: 'SET_AUTHENTICATED' });
    }
  }, []); 

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
