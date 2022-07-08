import { RouteConfig } from 'react-router-config';
import { ShallowWrapper } from 'enzyme';
import React from 'react';

export interface Route extends RouteConfig {
  cache: boolean;
  auth: boolean;
  path: string | string[];
  layout: 'default' | 'auth' | 'main' | 'app';
  title?: string;
  allowRedirect?: boolean;
  roles?: ROLES[];
}

export const Routes = {
  signIn: '/sign-in',
  signUp: '/sign-up',
  main: '/',
  dashboard: '/dashboard',
  admin: '/admin-panel',
  adminDictionary: '/admin-panel/dictionary',
  adminWords: '/admin-panel/words',
};

export enum Colors {
  black = '#000',
  blue = '#5E81F4',
  barColor = '#051e34',
  sbercolor = '#d9edf1',
  primary = '#1b3a57',
  bombay = '#acafb5',
  iconColor = '#8595A8',
  red = '#f11414',
  gray = '#CACCCF',
  bluebutton = '#1a73e8',
  white = '#fff',
  cornFlowerBlue = '#638cff',
  melrose = '#9392ff',
  terracotta = '#e37364',
  googleColorText = '#669df6',
}

export enum FIREBASE_PATH {
  users = 'users',
}

export type ColorsStrings = keyof typeof Colors;

// eslint-disable-next-line @typescript-eslint/ban-types
export type ArgumentTypes<F extends Function> = F extends (
  ...args: infer A
) => any
  ? A
  : never;

export type ActionType<T extends (...args: any) => any> = (
  ...args: Parameters<T>
) => void;

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export enum ANIMATION_TIMING {
  standard = '100ms',
}

export enum FONTS {
  CabinBold = 'CabinBold, sans-serif',
  CabinMedium = 'CabinMedium, sans-serif',
  CabinRegular = 'CabinRegular, sans-serif',
  GeoramaLight = 'GeoramaLight, sans-serif',
  GeoramaRegular = 'GeoramaRegular, sans-serif',
  GeoramaMedium = 'GeoramaMedium, sans-serif',
  GeoramaBold = 'GeoramaBold, sans-serif',
  GeoramaExtraBold = 'GeoramaExtraBold, sans-serif',
}

export type testComponentType = ShallowWrapper<
  any,
  Readonly<Record<string, never>>,
  React.Component<Record<string, never>, Record<string, never>, any>
>;

export type PushType = 'info' | 'error';

export enum PushTimings {
  showTimeout = 100,
  showDuration = 4000,
  slideInDuration = 500,
  fadeOutDuration = 500,
}

export enum NotificationMessage {
  successSignUp = 'Success! Welcome to service',
}

export enum shapes {
  circle = 'M 0 25 A 1 1 0 0 0 50 25 A 1 1 0 0 0 0 25',
  square = 'M 0 50 L 50 50 L 50 0 L 0 0 L 0 50',
  triangle = 'M 0 50 L 50 50 L 25 0 L 0 50',
}

export enum ROLES {
  customer = 'customer',
  editor = 'editor',
  admin = 'admin',
  superAdmin = 'superAdmin',
}

export interface IWord {
  initialText: string;

  transcription: string;

  translation: string[];

  wordLevelKnowledge: 0 | 1 | 2 | 3;

  correctlyAnswered: 0 | 1 | 2;

  image: string;
}
