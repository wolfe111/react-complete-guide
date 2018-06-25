import React from 'react';

const userOutput = (props) => {
  const {username} = props
  return (
    <div>
      <p>{'Username: ' + username}</p>
    </div>
  )
}

export default userOutput;