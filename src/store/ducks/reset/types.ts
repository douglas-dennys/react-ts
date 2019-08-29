/**
 * Action types
 */
export enum ResetTypes {
  LOAD_REQUEST = '@reset/LOAD_REQUEST',
  LOAD_SUCCESS = '@reset/LOAD_SUCCESS',
  LOAD_FAILURE = '@reset/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Reset {
  password: string;
  confirmedPassword: string;
}

/**
 * State types
 */
export interface ResetState {
  readonly data: Reset;
  readonly loading: boolean;
  readonly error: boolean;
}
