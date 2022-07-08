import { Request, Response } from 'express';
import Helmet from 'react-helmet';
import fs from 'fs';

import store, { sagaMiddleware } from 'store/server';
import { rootSaga } from 'models/sagas';
import { renderStreamApp } from 'utils/SSR/renderRootApp';
import { renderToPipeableStream } from 'react-dom/server';
import { renderFullPage } from 'src/renderFullPage';

const jsFiles: Array<string> = [];

fs.readdirSync('./dist/assets').forEach(file => {
  if (file.split('.').pop() === 'js') jsFiles.push(`/assets/${file}`);
});

export default (req: Request, res: Response) => {
  const location = req.path;
  function renderApp() {
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    const appContentStream = renderStreamApp(location);

    let didError = false;

    const { pipe, abort } = renderToPipeableStream(appContentStream, {
      onShellReady() {
        // If streaming
        console.log('onShellReady start');
        res.statusCode = didError ? 500 : 200;

        res.send(
          renderFullPage(appContentStream, helmetData, jsFiles, reduxState)
        );

        pipe(res);
        console.log('onShellReady stop');
      },

      onError(x) {
        didError = true;
        console.error(x);
      },
    });
    setTimeout(abort, 5000);
  }

  sagaMiddleware.run(rootSaga);
  renderApp();
};
