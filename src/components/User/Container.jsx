import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import axios from 'axios';
import User from './User'
import * as userActions from '../../actions/user';

function Container({users, userActionCreators}) {

  const {fetchUsers} = userActionCreators;

  function renderUsers() {
    return users.map(user => <User key={user.id} userItem={user} />);
  }

  useEffect(() => {
    async function fetchUserFromApi() {
      const {data} = await axios.get('http://5d418c0475f67300146b3f63.mockapi.io/user');

      // actions push data to redux
      fetchUsers(data);
    }

    fetchUserFromApi();
  }, []);

  return(
    <div className="container">
      <div className="col-md-6 mt-2">
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            placeholder="Search here..."
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Created At</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { users.length && renderUsers() }
        </tbody>
      </table>
    </div>
  )
}

// Redux Config
const mapStateToProps = (state) => ({
  users: state.user.users,
});

const mapDispatchToProps = (dispatch) => ({
  userActionCreators: bindActionCreators(userActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
// Redux Config

export default compose(withConnect)(Container);