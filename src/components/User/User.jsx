import React from 'react';

function User({userItem}) {
  return (
    <>
      <tr>
        <td>{userItem.id}</td>
        <td>{userItem.createdAt}</td>
        <td>{userItem.name}</td>
        <td>
          <img src={userItem.avatar} alt={userItem.avatar} />
        </td>
      </tr>
    </>
  );
}

export default User;