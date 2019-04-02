import React, { Component } from "react";

export default class Reservation extends Component {
  state = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };

  handleSubmit = evt => {
    alert(JSON.stringify(this.state));
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pay by Credit Card:
            <input
              name="payByCreditCard"
              type="checkbox"
              checked={this.state.payByCreditCard}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <br />
          <input
            name="phone"
            type="text"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Phone"
          />
          <br />
          <input
            name="street"
            type="text"
            value={this.state.steet}
            onChange={this.handleChange}
            placeholder="Street"
          />
          <br />
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
            placeholder="City"
          />
          <br />
          <input
            name="zip"
            type="number"
            value={this.state.zip}
            onChange={this.handleChange}
            placeholder="Zip"
          />
          <br />
          <input
            name="country"
            type="text"
            value={this.state.country}
            onChange={this.handleChange}
            placeholder="Country"
          />
          <br />
          <input type="submit" value="Submit" className="btn btn-success" />
        </form>
        <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
}
