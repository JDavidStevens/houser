import React, { Component } from 'react';
import House from '../House/House';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get('/api/houses').then(results => {
      this.setState({
        houses: results.data
      });
    });
  }
  render() {
    let inventory = this.state.houses.map((element, index) => {
      return <House key={index} locations={element} />;
    });
    return (
      <div>
        Dashboard
        <House />
        <button>Add New Property</button>
      </div>
    );
  }
}
