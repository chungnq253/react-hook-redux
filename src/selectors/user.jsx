import memoize from "fast-memoize";

const usersSelector = state => {
  return state.getIn(['user']).toJS();
};

export const getUsersSelect = memoize(usersSelector);
