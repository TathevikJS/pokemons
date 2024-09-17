import { LoginPageText } from '@/helpers/constants';

export const login = async (username: string, password: string, dispatch: any) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        dispatch({ type: 'LOGIN_SUCCESS' });
        resolve('success');
      } else {
        dispatch({ type: 'LOGIN_FAILURE', error: LoginPageText.ERROR_TEXT });
        reject(new Error(LoginPageText.ERROR_TEXT));
      }
    }, 1000);
  });
};


export const logout = async (dispatch: any) => {
  dispatch({ type: 'LOGOUT_REQUEST' });

  return new Promise((resolve) => {
    dispatch({ type: 'LOGOUT_SUCCESS' });
    resolve('success');
  });
};

