import { action } from 'typesafe-actions';
import { DashboardTypes, Dashboard } from './types';

export const loadRequest = () => action(DashboardTypes.LOAD_REQUEST);
export const loadSuccess = (data: Dashboard) => action(DashboardTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(DashboardTypes.LOAD_FAILURE);
