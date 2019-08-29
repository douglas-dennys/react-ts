import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { LoginState } from './ducks/login/types';
import { RecoverState } from './ducks/recover/types';
import { ResetState } from './ducks/reset/types';
import { DashboardState } from './ducks/dashboard/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  login: LoginState;
  recover: RecoverState;
  reset: ResetState;
  dashboard: DashboardState;
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default store;
