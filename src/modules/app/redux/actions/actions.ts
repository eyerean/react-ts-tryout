import { IPerson } from '../../types/person';
import { STORE_PERSON } from './actionTypes';

const fetchPerson = (id: string) => ({
  payload: {
    id
  },
  type: "USER_FETCH_REQUESTED"
});

const storePerson = (person: IPerson) => ({
  payload: {
    person
  },
  type: STORE_PERSON
});

export default {
  fetchPerson,
  storePerson
}