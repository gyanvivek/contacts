import types from './types';

export interface AuthAction {
  type: string;
  data: any;
}

const login = () => async (dispatch: any) => {
  dispatch({
    type: types.AUTH_PENDING,
  });
};

const logout = () => async (dispatch: any) => {
  dispatch({
    type: types.AUTH_LOGOUT_SUCCESS,
  });
};

export { login, logout };
