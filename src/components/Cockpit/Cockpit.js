import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'

const cockpit = (props) => {
  let btnClass = classes.Button
  const assignedClasses = []
  if (props.showPerson) {
    btnClass = [classes.Button, classes.Red].join(' ')
  }
 
  if (props.persons.length <=2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  // we created a high order function for this to return. HOC are normal react components, but with one specialaility.
  // They wrap other components to add a certain functionality. Aux is a high order function that just returns the props of the children
  // this means you can get away with not wrapping everything in a div. This means you can render adjacent html element
  // you do not have redundant html elements
  // In react 16.2 there is now built in Aux compoents these are called fragments. To use these you just use an empty tag <>
  // <> will perform the same as the below. 
  return (
    <Aux>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This really works!!</p>
      <button  className={btnClass} onClick={props.toggle}>
        Toggle Person
      </button>
    </Aux>
  );
};

export default cockpit;