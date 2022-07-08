import { Request, Response } from 'express';
import Helmet from 'react-helmet';
import fs from 'fs';

import store, { sagaMiddleware } from 'store/server';
import { rootSaga } from 'models/sagas';
import { renderStreamApp } from 'utils/SSR/renderRootApp';
import { renderHTMLEnd, writeHtmlStart } from 'utils/SSR/renderHTML';

const jsFiles: Array<string> = [];

fs.readdirSync('./dist/assets').forEach(file => {
  if (file.split('.').pop() === 'js') jsFiles.push(`/assets/${file}`);
});

export default (req: Request, res: Response) => {
  const location = req.path;
  function renderApp() {
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    writeHtmlStart(res, helmetData);

    const appContentStream = renderStreamApp(location);

    appContentStream.pipe(res, { end: false });

    appContentStream.on('end', () => {
      const htmlEnd = renderHTMLEnd(reduxState, jsFiles);

      res.write(htmlEnd);
      res.end();
    });
  }

  sagaMiddleware.run(rootSaga);
  renderApp();
};
