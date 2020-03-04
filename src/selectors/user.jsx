import memoize from "fast-memoize";

const usersSelector = state => {
  return state.getIn(['user', 'users']).toJS();
};

export const getUsersSelect = memoize(usersSelector);
