import React, { Component } from 'react';
import { getFunName } from '../helpers'
import { Link } from 'react-router-dom';

export default class StorePicker extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: getFunName()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" placeholder="Store Name" value={this.state.value} required onChange={this.handleChange}/>
        <Link to={"/store/"+this.state.value}><button type="submit">Visit Store</button></Link>
      </form>
    );
  }
}
