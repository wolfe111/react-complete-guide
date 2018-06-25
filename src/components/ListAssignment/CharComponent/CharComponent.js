import React from 'react';
import './CharComponent.css'

const charComponent = ({letter, click}) => {
  return (
    <div className="CharComponent" onClick={click}>{letter}</div>
  )
}

export default charComponent;