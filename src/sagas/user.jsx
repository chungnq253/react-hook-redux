import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';

import * as userConstants from '../constants/user';
import * as userActions from '../actions/user';
import { fetchUsersAPI } from '../apis/user';

function* fetchUsers({ payload }) {
  yield put(userActions.fetchUsersLoading());

  try {
    const { data } = yield call(fetchUsersAPI, payload);
    yield put(userActions.fetchUsersSuccess(data));
  } catch ({ response }) {
    yield put(userActions.fetchUsersLoading());
  }
}

export default function* user() {
  yield takeEvery(userConstants.FETCH_USERS, fetchUsers);
}