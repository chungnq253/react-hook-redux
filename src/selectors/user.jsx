import { createSelector } from 'reselect'

const usersSelector = state => state.getIn(['user', 'users']).toJS();

export const getUsersSelect = createSelector(usersSelector, data => data);
