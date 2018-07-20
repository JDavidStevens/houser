import React, { Component } from 'react';

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    };

    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputAddress = this.handleInputAddress.bind(this);
    this.handleInputCity = this.handleInputCity.bind(this);
    this.handleInputState = this.handleInputState.bind(this);
    this.handleInputZipcode = this.handleInputZipcode.bind(this);
  }

  handleInputName(value) {
    this.setState({ name: value });
  }
  handleInputAddress(value) {
    this.setState({ address: value });
  }
  handleInputCity(value) {
    this.setState({ city: value });
  }
  handleInputState(value) {
    this.setState({ state: value });
  }
  handleInputZipcode(value) {
    this.setState({ zipcode: value });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          placeholder="Name"
          onChange={e => this.handleInputName(e.target.value)}
        />
        <input
          value={this.state.address}
          placeholder="Street"
          onChange={e => this.handleInputAddress(e.target.value)}
        />
        <input
          value={this.state.city}
          placeholder="City"
          onChange={e => this.handleInputCity(e.target.value)}
        />
        <input
          value={this.state.state}
          placeholder="State"
          onChange={e => this.handleInputState(e.target.value)}
        />
        <input
          value={this.state.zipcode}
          placeholder="Zip Code"
          onChange={e => this.handleInputZipcode(e.target.value)}
        />
      </div>
    );
  }
}
