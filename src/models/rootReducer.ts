import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';

import appReducer from './app';

export const rootReducer = combineReducers({
  app: appReducer,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;
