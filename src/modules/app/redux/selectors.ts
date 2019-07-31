import { State } from '../types/app';

const getPerson = (state: State) => state.app.person;

export default {
  getPerson
}