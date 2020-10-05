import { types, actions } from '../actions/auth';

export const initialState = {
  isAuthenticated: false,
  loading: false,
  data: {
    profileObj: {
      email: '',
      googleId: '',
      imageUrl: '',
      name: '',
    },
  },
};

export default (oldState = initialState, action: actions.AuthAction) => {
  const state = JSON.parse(JSON.stringify(oldState));
  const { type, data } = action;
  switch (type) {
    case types.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        data: data,
      };
    case types.AUTH_PENDING:
      return { ...state, isAuthenticated: false, loading: true };
    case types.AUTH_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: data,
        loading: false,
      };
    case types.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};
