import serialize from 'serialize-javascript';
import { RootState } from 'models/rootReducer';
import { Response } from 'express';

const renderHTMLStart = (helmetData: {
  title: { toString: () => any };
  meta: { toString: () => any };
}) => `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="google-site-verification" content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="shortcut icon" type="image/png" href="/images/favicon.png">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
        </head>
        <body>`;

export const renderHTMLEnd = (
  reduxState: RootState,
  scripts: Array<string>
) => `<script>
                window.__INITIAL_STATE__ = ${serialize(reduxState)}
            </script>
            ${scripts
              .map(script => `<script src="${script}"></script>`)
              .join('')}
        </body>
        </html>`;

export const writeHtmlStart = (
  res: Response,
  helmetData: { title: { toString: () => any }; meta: { toString: () => any } }
) => {
  const htmlStart = renderHTMLStart(helmetData);
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.locals.HTML_START = htmlStart;
  res.write(htmlStart);
};
