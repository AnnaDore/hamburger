import React, { Component } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import "./App.css";
import Person from "./Person/Person";

//function App() {
class App extends Component {
  state = {
    persons: [
      { name: "Dodo", age: 17 },
      { name: "Radku", age: 24 },
      { name: "Azaza", age: 30 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 17 },
        { name: "Radku", age: 18 },
        { name: "Azaza", age: 30 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 17 },
        { name: "Radku", age: 18 },
        { name: "Azaza", age: 30 },
      ],
    });
  }

  render() {
    //css
    const style = {
      backgroundColor: "white",
      font: "ingerit",
      border: "1x solid blue",
      padding: "8px"
    }

    return (
      <div className="App">
        <h1>Hi, Im react app</h1>
        <h1>This works!</h1>
        <button
        style={style}
         onClick={() => this.switchNameHandler("DODO!")}>Change state</button>
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
      //React.createElement('div', {className:'App'}, (React.createElement('div', null, "does it work?")))
    );
  }
}

export default App;
