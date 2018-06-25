import React from 'react';

const userInput = (props) => {
  const {changeUsername, username} = props
  return (
    <input type="text" onChange={changeUsername} value={username}/>
  )
}

export default userInput