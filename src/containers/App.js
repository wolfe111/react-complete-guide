import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import UserOutput from '../components/SyntaxAssignment/UserOutput/UserOutput'
import UserInput from '../components/SyntaxAssignment/UserInput/UserInput'
import ValidationComponent from '../components/ListAssignment/ValidationComponent/ValidationComponent'
import CharComponent from '../components/ListAssignment/CharComponent/CharComponent'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'
// import Radium, {StyleRoot} from 'radium'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Jack', age: 29 },
      { id: 2, name: 'Jackie', age: 20 },
      { id: 3, name: 'Jackathon', age: 99 }
    ],
    username: 'Jack',
    showPersons: false,
    lettersEntered:[] 
  }

  // Should not cause any side effects
  componentWillMount() {
    console.log('App.js component will mount')
  }

  // Should not update the state here as it will cause a rerender what you do not want to happen
  componentDidMount() {
    console.log('App.js component did mount')
  }

  // Use this when you want to sync the local state of the component to the props
  // Initalise the state to the props, so we can later on change the state in that component, but get
  // the base state from the outside component/props
  // dont reach out to the web/ cause side effects
  componentWillReceiveProps(nextProps) {
  
  }

  // The params are the props and state that triggered the update
  // The method can cancel the updating process. Return true to continue the updating process, false to stop it.
  // Use false to save performance
  // dont reach out to the web/ cause side effects
  // If we want to check if the props or state have changed, a shallow compare then we dont need
  // to implement shouldComponentUpdte. Instead we can use PureComponents as it will already have
  // this shallow compare inside of it. PureComponents and Components are similar except the previous case.
  // Only use PureComponents if updates are not required. Dont make everything a PureComponent as there
  // is a performance hit on the comparision in cases where it will update everytime and there has alreayd been
  // checks on the params.
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.persons !== this.state.persons || 
    nextState.showPersons !== this.state.showPersons
  }

  // you will reach the lifecycle method below if shouldComponentUpdate returned true
  // you get access to the props and state that triggered the update
  // Can sync the state to the props like in the componenetWillReceiveProps method. May be a better place as you know
  // you will be continuing with the updating. After this you then call render.
  // Then the updating of all of the child component props will happed
  componentWillUpdate(nextProps, nextState) {
  
  }

  // This is called after render once it has and all its children have rendered to the screen at the end
  // Simlar to did mount and you can cause side effects here like call out to the web.
  // Yo could not update the state here.
  componentDidUpdate() {

  }


  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Jacki', age: 20 },
        { name: 'Jackathon', age: 99 }
      ],
      username: 'Jack',
      showPersons: false
    })
  }

  nameChangeHandler = (event, id) => {
    const {persons} = this.state
    const personIndex = persons.findIndex(p => p.id === id)
    const person = {
      ...persons[personIndex]
    }

    person.name = event.target.value
    const newPersons = [...persons]
    newPersons[personIndex] = person

    this.setState({
      persons: newPersons
    })
  }

  countLetters = (event) => {
    const word = event.target.value
    this.setState({
      lettersEntered: word.split('')
    })
  }

  changeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  renderCharComponents = () => {
    const {lettersEntered} = this.state
    return lettersEntered.map((letter, index) => {
      return <CharComponent key={index+letter} letter={letter} click={() => this.deleteLetterHandler(index)}/>
    })
  }

  deleteLetterHandler = (letterIndex) => {
    const letters = [...this.state.lettersEntered]
    letters.splice(letterIndex, 1);
    
    this.setState({lettersEntered: letters})
  }

  render() {
    console.log('App.js render')
    let personsElement = null;

    if (this.state.showPersons) {
        personsElement = <Persons
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          persons={this.state.persons}
        />
      }
    return (
      // <StyleRoot>
        <WithClass classes={classes.App}>
          <button onClick={() => this.setState({showPersons:true})}>Show Persons</button>
          <Cockpit
            title={this.props.title}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            toggle={this.togglePersonHandler}
          />
          {personsElement}
          <br/>
            <UserInput changeUsername={this.changeUsername} name={this.state.username}/>
            <UserOutput username={this.state.username}/>

            <input type="text" value={this.state.lettersEntered.join('')} onChange={this.countLetters}/>
            <p>There are {this.state.lettersEntered.length} letter in the input above</p>
            <ValidationComponent lettersEntered={this.state.lettersEntered} />
            {this.renderCharComponents()}
        </WithClass>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
