import React, { Component } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

//function App() {
class App extends Component {
  state = {
    persons: [
      { name: "Dodo", age: 17 },
      { name: "Radku", age: 24 },
      { name: "Azaza", age: 30 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons
    persons.splice(personIndex, 1)
    this.setState({persons:persons})
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 17 },
        { name: "Radku", age: 18 },
        { name: "Azaza", age: 30 },
      ],
    });
  };

  togglePersonHandler =  () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    //css
    const style = {
      backgroundColor: "white",
      font: "ingerit",
      border: "1x solid blue",
      padding: "8px",
    };

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
       {/*  working with the arrays/list */}
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} age={person.age} />
        })}
          </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, Im react app</h1>
      
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
      //React.createElement('div', {className:'App'}, (React.createElement('div', null, "does it work?")))
    );
  }
}

export default App;
