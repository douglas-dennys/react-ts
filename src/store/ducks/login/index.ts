import { Reducer } from 'redux';
import { LoginState, LoginTypes } from './types';

const INITAL_STATE: LoginState = {
  data: {
    email: '',
    password: '',
  },
  error: false,
  loading: false,
};

const reducer: Reducer<LoginState> = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case LoginTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case LoginTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case LoginTypes.LOAD_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        data: { email: '', password: '' },
      };
    default:
      return state;
  }
};

export default reducer;
