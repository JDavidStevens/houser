import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class Step2 extends Component {
  constructor() {
    super();
    this.state = {
      mortage: 0,
      rent: 0
    };

    this.handleUpdateMortgage = this.handleUpdateMortgage.bind(this);
    this.handleUpdateRent = this.handleUpdateRent.bind(this);
  }

  handleUpdateMortgage(value) {
    this.setState({ mortage: value });
  }

  handleUpdateRent(value) {
    this.setState({ rent: value });
  }

  render() {
    return (
      <div>
        <h2>Add New Listing</h2>
        <button>Cancel</button>
        <h4>Recommended Rent: $0</h4>
        <p>Monthly Mortgage Amount</p>
        <input onChange={e => this.handleUpdateMortgage(e.target.value)} />
        <p>Desired Monthly Rent</p>
        <input onChange={e => this.handleUpdateRent(e.target.value)} />
        <button>Previous Step</button>
        <button>Complete</button>
      </div>
    );
  }
}
