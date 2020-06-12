import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { getUsersSelect } from '../../selectors/user';
import Item from './Item'
import * as userActions from '../../actions/user';

function User({user, userActionCreators}) {

  const {fetchUsers} = userActionCreators;
  const [keyword, setKeyword] = useState('');

  function renderUsers() {
    return user.users.map(user => <Item key={user.id} userItem={user} />);
  }

  useEffect(() => {
    fetchUsers(keyword);
  }, [fetchUsers, keyword]);

  return(
    <div className="container">
      <div className="col-md-6 mt-2">
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            placeholder="Search here..."
            onChange={(e) => setKeyword(e.target.value)}
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
          { 
            user.loading ? (
              <tr className="text-center">
                <h1>Loading...</h1>
              </tr>
            ) : renderUsers() 
          }
        </tbody>
      </table>
    </div>
  )
}

// Redux Config
const mapStateToProps = (state) => {
  return {
    user: getUsersSelect(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  userActionCreators: bindActionCreators(userActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
// Redux Config

export default compose(withConnect)(User);