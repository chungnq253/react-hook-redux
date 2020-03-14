import * as userConstants from '../constants/user';

export const fetchUsers = (data) => ({
  type: userConstants.FETCH_USERS,
  payload: data,
});

export const fetchUsersSuccess = (data) => ({
  type: userConstants.FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersLoading = () => ({
  type: userConstants.FETCH_USERS_LOADING,
});