import { Provider } from 'react-redux';
import store from 'store/server';
import { StaticRouter } from 'react-router-dom';
import App from 'src/App';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import {renderToString} from 'react-dom/server';

const jsx = (location: string) => (
  <div id="root">
    <Provider store={store}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </Provider>
  </div>
);

export const renderStreamApp = (location: string) => {
  const sheet = new ServerStyleSheet();
  const root = sheet.collectStyles(jsx(location));
  return renderToString(sheet.collectStyles(root));
};
