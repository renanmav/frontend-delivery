import { toast } from 'react-toastify';

export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',
};

const INITIAL_STATE = {
  loading: false,
  token: null,
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    case Types.LOGIN_FAILURE:
      toast.warn(action.payload.message);
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  loginSuccess: (token, user) => ({
    type: Types.LOGIN_SUCCESS,
    payload: { token, user },
  }),
  loginFailure: message => ({
    type: Types.LOGIN_FAILURE,
    payload: { message },
  }),
};
