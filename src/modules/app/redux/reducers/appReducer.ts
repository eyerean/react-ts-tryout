import { IAction, IAppState } from '../../types/app';
import { STORE_PERSON } from '../actions/actionTypes';

const INITIAL_STATE = {
  error: undefined,
  fetching: false,
  person: {},
};

const appReducer = (state: IAppState = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case STORE_PERSON:
      return {...state, person: action.payload.person};
      break;
    case "USER_FETCH_REQUESTED":
      return { ...state, fetching: true, error: undefined };
      break;
    case 'USER_FETCH_SUCCEEDED':
      return { ...state, fetching: false, person: action.payload.person };
      break;
      break;
    case 'USER_FETCH_FAILED':
      return { ...state, fetching: false, error: action.payload.message };
      break;
    default:
      return state;
  }
};

export default appReducer;
