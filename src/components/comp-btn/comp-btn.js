import React, { Component } from 'react';
import './comp-btn.css';

class Btn extends Component{
  render(){
	  return (
      <div className="btn-container">
        <img src={this.props.src} className="nav-icon"/>
        <p className="nav-title">{this.props.title}</p>
      </div>
    )
  }
}

export default Btn