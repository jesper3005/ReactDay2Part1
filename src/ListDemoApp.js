import React, { Component } from "react";

function NumberList({ numbers }) {
  const listItems = numbers.map(n => <li key={n}>{n}</li>);
  return <ul>{listItems}</ul>;
}

function NumberTable({ numbers }) {
  const listItems = numbers.map(n => (
    <tr key={n}>
      <td>{n}</td>
    </tr>
  ));
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>{listItems}</tbody>
    </table>
  );
}

function ListDemo(props) {
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
      <NumberTable numbers={props.numbers} />
    </div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [1, 2, 3] };
  }

  componentDidMount() {
    console.log("componentDidMount was called");
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    console.log("componenetWillUnmount was called");
    clearInterval(this.timerID);
  }

  tick() {
    const newArray = [...this.state.numbers, this.state.numbers.length + 1];
    this.setState({
      numbers: newArray
    });
  }

  render() {
    return <ListDemo numbers={this.state.numbers} />;
  }
}
