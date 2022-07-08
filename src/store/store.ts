import createSagaMiddleware from 'redux-saga';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'models/rootReducer';
import _omit from 'lodash/omit';

export const sagaMiddleware = createSagaMiddleware();
// const isDev = process.env.NODE_ENV === 'development';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  devTools: true,
  preloadedState: {
    ..._omit(window.__INITIAL_STATE__, 'router'),
  },
});

// import createSagaMiddleware from 'redux-saga';
// import _omit from 'lodash/omit';
//
// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from 'models/rootReducer';
//
// export const sagaMiddleware = createSagaMiddleware();
// const isDev = process.env.NODE_ENV === 'development';
//
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
//   devTools: isDev,
//   preloadedState: {
//     ..._omit(window.__INITIAL_STATE__, 'router'),
//   },
// });
