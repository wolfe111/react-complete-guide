import React from 'react'
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const persons = (props) => (
  props.persons.map((person, index) => {
    const {name, age, id} = person

    return (
      <ErrorBoundary key={id}>
        <Person 
          name={name}
          age={age}
          key={id}
          click={() => props.clicked(index)}
          changed={(event) => props.changed(event, id)}
        >Is Coool</Person>
      </ErrorBoundary>)
    })
);

export default persons