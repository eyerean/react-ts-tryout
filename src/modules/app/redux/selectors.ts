import { IState } from '../types/app';

const getPerson = (state: IState) => state.app.person;

export default {
  getPerson
}