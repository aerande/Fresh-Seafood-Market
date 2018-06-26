import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import base from '../base';
import firebase from 'firebase';

export default class Inventory extends Component {
  constructor(props){
    super(props);

    this.state = {};
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, key) {
    const fish = this.props.fishes[key];
    const updatedFish = {
      ...fish,
      [event.target.name]: event.target.value
    }
    this.props.updateFish(key, updatedFish);
  }




  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(event) => this.handleChange(event, key)} />
        <input type="text" name="price" value={fish.price} placeholder="Fish Price" onChange={(event) => this.handleChange(event, key)} />
        <select name="status" value={fish.status} onChange={(event) => this.handleChange(event, key)} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" value={fish.desc} placeholder="Fish Desc" onChange={(event) => this.handleChange(event, key)} ></textarea>
        <input type="text" name="image" value={fish.image} placeholder="Fish Image" onChange={(event) => this.handleChange(event, key)} />
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render(){
    return(
      <div>
      <h2>Inventory</h2>
      {
        Object
        .keys(this.props.fishes)
        .map(this.renderInventory)
      }
      <AddFishForm addFish={this.props.addFish} loadSamples={this.props.loadSamples}/>
      <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }
}
