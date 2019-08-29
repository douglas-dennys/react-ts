import { action } from 'typesafe-actions';
import { ResetTypes, Reset } from './types';

export const loadRequest = () => action(ResetTypes.LOAD_REQUEST);
export const loadSuccess = (data: Reset) => action(ResetTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ResetTypes.LOAD_FAILURE);
