import { all, delay, put, select, takeLatest } from "redux-saga/effects";

import types, { Action } from "actions/types";
import { RPropsRedux } from "reducers";
import { State } from "reducers/state";
import { StateStories } from "reducers/state/stories";

// §1 Transitions

function* watchLNG_CHANGE() { // §2
  yield takeLatest(types.LNG_CHANGE, LNG_CHANGE);
} function* LNG_CHANGE(action: Action) {
  const language: State["language"] = yield select((s: RPropsRedux) => s.Redux.language);
  const inTransition = language !== "en" && language !== "pt";
  const fromSaga = action.payload !== undefined;

  if (inTransition === false && fromSaga === false) {
    yield put({
      type: types.LNG_CHANGE,
      value: language === "en" ? "en>pt" : "pt>en",
      payload: "fromSaga",
    });
  }
  if (inTransition && fromSaga) {
    yield delay(400); // Remember to match the animation-duration for language changes
    yield put({
      type: types.LNG_CHANGE,
      value: language === "en>pt" ? "pt" : "en",
      payload: "fromSaga",
    });
  }
}

function* watchNOTF_DISMISS() { // §2
  yield takeLatest(types.NOTF_DISMISS, NOTF_DISMISS);
} function* NOTF_DISMISS(action: Action) {
  yield delay(400); // Remember to match the animation-duration for apprisal deletions
  const ids = (action.object as string[]) ?? [];
  for (const id of ids) {
    yield put({
      type: types.NOTF_DELETE,
      value: id,
    });
  }
}

function* watchSTRY_REPLACE() { // §2
  yield takeLatest(types.STRY_REPLACE, STRY_REPLACE);
} function* STRY_REPLACE(action: Action) {
  const { current, sidebar } = yield select((s: RPropsRedux) => s.Redux.stories);
  if (current !== "/") {
    if (action.payload === undefined) {
      // Hide the sidebar when changing tabs (stories)
      if (sidebar === "visible") {
        yield put({
          type: types.SDB_TOGGLE,
          bool: false,
        });
      }
      yield delay(400); // Remember to match the animation-duration for stories changes
      yield put({
        type: types.STRY_REPLACE,
        value: action.value,
        payload: action.value,
      });
    }
  }
}

function* watchSDB_TOGGLE() { // §2
  yield takeLatest(types.SDB_TOGGLE, SDB_TOGGLE);
} function* SDB_TOGGLE(action: Action) {
  const sidebar: State["sidebar"] = yield select(
    (s: RPropsRedux) => s.Redux.sidebar,
  );
  const wantsHidden = yield sidebar === "visible";

  if (yield wantsHidden) {
    if (yield sidebar === "hiding") {
      yield delay(210);
      yield put({
        type: types.SDB_TOGGLE,
        bool: action.bool,
        value: "hidden",
      });
    }
  }
}

export default function* sagas() {
  yield all([
    watchLNG_CHANGE(),
    watchNOTF_DISMISS(),
    watchSTRY_REPLACE(),
    watchSDB_TOGGLE(),
  ]);
}
