import { IPerson } from './person';

export interface IAction { type: string; payload: any };

export interface IAppState {
  person: IPerson | any,
  fetching: boolean,
  error?: string
};

export interface IState {
  app: IAppState
};
