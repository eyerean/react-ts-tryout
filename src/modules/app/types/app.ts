import { Person } from './person';

export interface Action { type: string; payload: any };

export interface AppState {
  person: Person | any,
  fetching: boolean,
  error?: string
};

export interface State {
  app: AppState
};
