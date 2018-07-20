import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateInputName,
  updateInputAddress,
  updateInputCity,
  updateInputState,
  updateInputZipcode
} from '../../ducks/reducer';

class Step1 extends Component {
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
        <h2>Add New Listing</h2>
        <button>Cancel</button>
        <p>Property Name</p>
        <input
          value={this.state.name}
          onChange={e => this.handleInputName(e.target.value)}
        />
        <p>Address</p>
        <input
          value={this.state.address}
          placeholder="Street"
          onChange={e => this.handleInputAddress(e.target.value)}
        />
        <p>City</p>
        <input
          value={this.state.city}
          placeholder="City"
          onChange={e => this.handleInputCity(e.target.value)}
        />
        <p>State</p>
        <input
          value={this.state.state}
          placeholder="State"
          onChange={e => this.handleInputState(e.target.value)}
        />
        <p>Zip</p>
        <input
          value={this.state.zipcode}
          placeholder="Zip Code"
          onChange={e => this.handleInputZipcode(e.target.value)}
        />
        <button>Next Step</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Step1);
