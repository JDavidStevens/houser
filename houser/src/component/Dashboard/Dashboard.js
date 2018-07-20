import React, { Component } from 'react';
import House from '../House/House';

export default class Dashboard extends Component {

  constructor(){
    super()
    this.state={
      houses=[]
    }
  }

  componentDidMount(){
    axios.get(`/api/houses`).then(response =>{ this.setState({
      houses: response.data
    })
    })
  }
  render() {

    let inventory = this.state.houses.map((element,index)=>{
      return(
        <House key={index} locations={element}/>
      )
    })
    return (
      <div>
        Dashboard
        <House />
        <button>Add New Property</button>
        <button>Cancel</button>
      </div>
    );
  }
}
