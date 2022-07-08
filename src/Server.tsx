import { routes } from 'src/routes';
import nodePath from 'path';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import serverRenderMiddleware from './server-render-middleware';

const port = 3001;
const server = express();

server.use('/assets', express.static('./dist/assets'));

routes
  .filter(({ path }) => path !== '*')
  .forEach(({ path }) => server.get(path, serverRenderMiddleware));

(() => {
  server.use(helmet());
  server.use(hpp());
  server.use(compression());
  server.use(express.static(nodePath.resolve(process.cwd(), 'dist')));
})();

server.listen(port, () => console.log(`Listening on port ${port}`));
