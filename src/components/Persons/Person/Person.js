import React from 'react';
import classes from './Person.css'
// import Radium from 'radium'

const person = ({name, age, children, click, changed}) => {
  // const style = {
  //   '@media(min0width: 500px)': {
  //     width: 450
  //   }
  // };
  return (
      <div className={classes.Person}>
        <p onClick={click}>{'I\'m a ' + name + '! I am ' + (age * 7) + ' in dogs year'}</p>
        <p>{children}</p>
        <input type="text" value={name} onChange={changed}/>
      </div>
  )

  // You can also have if you dont want the outside div, dont forget you need a key though
    // return [
    //     <p onClick={click}>{'I\'m a ' + name + '! I am ' + (age * 7) + ' in dogs year'}</p>,
    //     <p>{children}</p>,
    //     <input type="text" value={name} onChange={changed}/>
    // ]
}

// export default Radium(person);

export default person;