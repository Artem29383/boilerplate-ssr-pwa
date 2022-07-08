import { all } from 'redux-saga/effects';

import app from './app/sagas';

export const rootSaga = function* rootSaga() {
  yield all([app()]);
};
