import { all, takeLatest } from 'redux-saga/effects';

import { LoginTypes } from './login/types';
import { load as loginRequest } from './login/sagas';

import { ResetTypes } from './reset/types';
import { load as resetRequest } from './reset/sagas';

import { RecoverTypes } from './recover/types';
import { load as recoverRequest } from './recover/sagas';

import { DashboardTypes } from './dashboard/types';
import { load as dashboardRequest } from './dashboard/sagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.LOAD_REQUEST, loginRequest),
    takeLatest(ResetTypes.LOAD_REQUEST, resetRequest),
    takeLatest(RecoverTypes.LOAD_REQUEST, recoverRequest),
    takeLatest(DashboardTypes.LOAD_REQUEST, dashboardRequest),
  ]);
}
