import { action } from 'typesafe-actions';
import { RecoverTypes, Recover } from './types';

export const loadRequest = () => action(RecoverTypes.LOAD_REQUEST);
export const loadSuccess = (data: Recover) => action(RecoverTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(RecoverTypes.LOAD_FAILURE);
