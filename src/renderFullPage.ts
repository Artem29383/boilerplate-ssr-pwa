import React from 'react';
import serialize from 'serialize-javascript';
import { HelmetData } from 'react-helmet';

export const renderFullPage = (
  html: React.ReactNode,
  helmetData: HelmetData,
  scripts: string[],
  reduxState: any
) => `
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
        <body>
    <div id="root">${html}</div>
<script>
                window.__INITIAL_STATE__ = ${serialize(reduxState)}
            </script>
            ${scripts
              .map(script => `<script src="${script}"></script>`)
              .join('')}
        </body>
        </html>`;
