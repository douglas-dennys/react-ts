/**
 * Action types
 */
export enum RecoverTypes {
  LOAD_REQUEST = '@recover/LOAD_REQUEST',
  LOAD_SUCCESS = '@recover/LOAD_SUCCESS',
  LOAD_FAILURE = '@recover/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Recover {
  email: string;
}

/**
 * State types
 */
export interface RecoverState {
  readonly data: Recover;
  readonly loading: boolean;
  readonly error: boolean;
}
