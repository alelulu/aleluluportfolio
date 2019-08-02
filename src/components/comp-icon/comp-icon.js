import React, { Component } from 'react';
import './comp-icon.css'

class Icon extends Component{
  render(){
	  return (
      <div className="icon-container">
        <i className={this.props.iconclass} data-toggle="tooltip" data-placement="top" title={this.props.title}></i>
      </div>
    )
  }
}

export default Icon;