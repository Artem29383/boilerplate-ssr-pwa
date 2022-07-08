import { Route, Routes } from '@types';
import Main from 'pages/Main';

export const routes: Route[] = [
  {
    path: Routes.main,
    exact: true,
    component: Main,
    cache: false,
    auth: false,
    layout: 'default',
    title: 'Main',
    allowRedirect: false,
  },
];