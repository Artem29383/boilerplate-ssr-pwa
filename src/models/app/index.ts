/* eslint-disable no-param-reassign, @typescript-eslint/no-unused-vars  */

import { createSlice } from '@reduxjs/toolkit';

export type InititialStateApp = {
  loadProcesses: {
    [key: string]: {
      load: boolean;
      message?: string;
    };
  };
  loadKey: string;
};

const initialState: InititialStateApp = {
  loadProcesses: {},
  loadKey: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const { actions } = appSlice;

export default appSlice.reducer;
