import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import history from 'utils/history';
import { store, sagaMiddleware } from 'store/store';
import { rootSaga } from 'models/sagas';
import { RootState } from 'models/rootReducer';
import App from './App';

const entryBlock = document.getElementById('root');

// global redeclared types
declare global {
  interface Window {
    __INITIAL_STATE__: RootState;
  }
}

const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

sagaMiddleware.run(rootSaga);

renderFunction(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  entryBlock
);
