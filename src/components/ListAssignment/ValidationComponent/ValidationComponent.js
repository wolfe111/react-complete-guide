import React from 'react';

const validationComponent = (props) => {
  const lettersEntered = props
  const validation = lettersEntered.length < 5 ? 'Text too Short' : null
  return (
    <div>{validation}</div>
  )
}

export default validationComponent;