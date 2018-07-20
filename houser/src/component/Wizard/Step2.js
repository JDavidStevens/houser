import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class Step2 extends Component {
  constructor() {
    super();
    this.state = {
      image: ''
    };

    this.handleInputImage = this.handleInputImage.bind(this);
  }
  handleInputImage(value) {
    this.setState({ image: value });
  }

  render() {
    return (
      <div>
        <h2>Add New Listing</h2>
        <button>Cancel</button>
        <input onChange={e => handleInputImage(e.target.value)} />
        <button>Previous Step</button>
        <button>Next Step</button>
      </div>
    );
  }
}
