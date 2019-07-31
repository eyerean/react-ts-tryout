import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import apiRoutes from '../../api/apiRoutes';
import { Action } from '../../types/app';

// watcher saga: watches for actions dispatched to the store, starts worker saga
/*
  takeLatest:
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* personWatcherSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchPersonSaga);
}

// worker saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPersonSaga(action: Action) {
  try {
    const response: AxiosResponse = yield call(fetchPerson, action.payload.id);    
    // dispatch a success action to the store with the new person
    yield put({type: "USER_FETCH_SUCCEEDED", payload: {person: response.data}});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

// function that returns api response
function fetchPerson(id: string): AxiosPromise {
  return axios({
    method: "get",
    url: apiRoutes.fetchPerson(id || '')
  });
}

export default personWatcherSaga;