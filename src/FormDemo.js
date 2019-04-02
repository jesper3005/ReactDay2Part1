import React, { Component } from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: { name: "" }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    window.alert(JSON.stringify(this.state.person));
  }

  handleInput = event => {
    const target = event.target;
    const prop = target.id;
    var value = target.value;
    var person = this.state.person;
    person[prop] = value; //Make sure you understand this
    this.setState({
      person: person
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              id="name"
              type="text"
              value={this.state.person.name}
              placeholder="First name"
              onChange={this.handleInput}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{JSON.stringify(this.state.person)}</p>
      </div>
    );
  }
}

export default function FormDemo() {
  return (
    <div>
      <NameForm />
    </div>
  );
}
