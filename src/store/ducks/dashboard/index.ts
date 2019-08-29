import { Reducer } from 'redux';
import { DashboardState, DashboardTypes } from './types';

const INITAL_STATE: DashboardState = {
  data: {
    response: {},
  },
  error: false,
  loading: false,
};

const reducer: Reducer<DashboardState> = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case DashboardTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case DashboardTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case DashboardTypes.LOAD_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        data: { response: {} },
      };
    default:
      return state;
  }
};

export default reducer;
