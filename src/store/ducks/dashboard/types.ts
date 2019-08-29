/**
 * Action types
 */
export enum DashboardTypes {
  LOAD_REQUEST = '@dashboard/LOAD_REQUEST',
  LOAD_SUCCESS = '@dashboard/LOAD_SUCCESS',
  LOAD_FAILURE = '@dashboard/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Dashboard {
  response?: object;
}

/**
 * State types
 */
export interface DashboardState {
  readonly data: Dashboard;
  readonly loading: boolean;
  readonly error: boolean;
}
