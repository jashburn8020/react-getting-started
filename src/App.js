import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

// Class-based component
class App extends Component {
  state = {
    characters: []
  };

  /* Removing a character from the table: To retrieve the state, we'll get this.state.characters using the ES6 property shorthand. To update the state, we'll use this.setState(), a built-in method for manipulating state. We'll filter the array based on an index that we pass through, and return the new array. */
  removeCharacter = index => {
    const { characters } = this.state;

    /* Update state using this.setState(). Simply applying a new value to
    this.state.property will not work. */
    this.setState({
      characters: characters.filter((character, i) => i !== index)
    });
  };

  /* Update the state by taking the existing this.state.characters and adding the new
  character parameter, using the ES6 spread operator. */
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        {/* Passing data as props.
        Curly braces around 'characters' as it's a JavaScript expression. */}
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
