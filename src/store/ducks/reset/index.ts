import { Reducer } from 'redux';
import { ResetState, ResetTypes } from './types';

const INITAL_STATE: ResetState = {
  data: {
    password: '',
    confirmedPassword: '',
  },
  error: false,
  loading: false,
};

const reducer: Reducer<ResetState> = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ResetTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ResetTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ResetTypes.LOAD_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        data: { password: '', confirmedPassword: '' },
      };
    default:
      return state;
  }
};

export default reducer;
