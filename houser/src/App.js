import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {Route}
      </div>
    );
  }
}

export default App;
