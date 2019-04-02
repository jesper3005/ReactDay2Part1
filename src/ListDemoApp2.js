import React, { Component } from "react";

function MemberTable({ members }) {
  const listItems = members.map(m => (
    <tr key={m.id}>
      <td>{m.name}</td>
      <td>{m.age}</td>
    </tr>
  ));
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{listItems}</tbody>
    </table>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members} />
    </div>
  );
}

export default class App extends React.Component {
  state = {
    members: [
      { id: 1, name: "Peter", age: 18 },
      { id: 2, name: "Jan", age: 35 },
      { id: 3, name: "Janne", age: 25 },
      { id: 4, name: "Martin", age: 22 }
    ]
  };
  render() {
    return <MemberDemo members={this.state.members} />;
  }
}
