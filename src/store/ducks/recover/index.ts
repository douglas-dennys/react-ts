import { Reducer } from 'redux';
import { RecoverState, RecoverTypes } from './types';

const INITAL_STATE: RecoverState = {
  data: {
    email: '',
  },
  error: false,
  loading: false,
};

const reducer: Reducer<RecoverState> = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case RecoverTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RecoverTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case RecoverTypes.LOAD_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        data: { email: '' },
      };
    default:
      return state;
  }
};

export default reducer;
