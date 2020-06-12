import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configStore';
import User from '../components/User';

const store = configureStore();

function UserProvider() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default UserProvider;
