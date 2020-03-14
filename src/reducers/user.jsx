import { fromJS } from 'immutable';
import * as userConstants from '../constants/user';

const initialState = fromJS({
  users: [],
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.FETCH_USERS_SUCCESS: {
      return (
        state.set('users', fromJS(action.payload))
          .set('loading', false)
      );
    }

    case userConstants.FETCH_USERS_LOADING: {
      return state.set('loading', true);
    }

    default:
      return state;
  }
};

export default reducer;