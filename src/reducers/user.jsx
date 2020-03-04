import { fromJS } from 'immutable';
import * as userConstants from '../constants/user';

const initialState = fromJS({
  users: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.FETCH_USERS: {
      return state.set('users', fromJS(action.payload));
    }

    default:
      return state;
  }
};

export default reducer;