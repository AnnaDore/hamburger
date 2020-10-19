import React, { Component } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
//import Radium,  { StyleRoot } from 'radium'

//function App() {
class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Dodo", age: 17 },
      { id: "2", name: "Radku", age: 24 },
      { id: "3", name: "Azaza", age: 30 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons:persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person


    this.setState({
      persons: persons
    });
  };

  togglePersonHandler =  () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    //css
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "ingerit",
      border: "1x solid blue",
      padding: "8px",
      ":hover": {
        backgroundColor: "lightgreen", 
        color: "black"
      }
    };

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
       {/*  working with the arrays/list */}
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} age={person.age} key={person.id}
          changed = {(event) => this.nameChangeHandler(event, person.id)}
           />
        })}
          </div>
      )
        //dynamic style, toggle by switch showPersons
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon", 
        color: "black"
      }
    }

    //dynamic classes AND className = {classes.join(' ')}
    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
   //   <StyleRoot>
      <div className="App">
        <h1>Hi, Im react app</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Change state
        </button>
        {persons}
        {/* below - ternary (click the button - show the content) */}
        {/* {this.state.showPersons ? 
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, "Dodoha")}
              changed={this.nameChangeHandler}
            >
              Text
            </Person>
          </div>
         : null} */}
      </div>
   //   </StyleRoot>
      //React.createElement('div', {className:'App'}, (React.createElement('div', null, "does it work?")))
    );
  }
}

export default App;
