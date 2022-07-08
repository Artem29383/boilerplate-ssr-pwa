import { all } from 'redux-saga/effects';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* test() {
  yield console.log(123);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function*() {
  yield all([
    // takeEvery(actions.addPush.type, test),
  ]);
}
