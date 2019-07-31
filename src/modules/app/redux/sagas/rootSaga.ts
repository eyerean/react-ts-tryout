import { all } from 'redux-saga/effects';
import personWatcherSaga from './personSaga';

export default function* rootSaga() {
  yield all([
    personWatcherSaga()
  ]);
}
