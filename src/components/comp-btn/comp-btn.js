import React, { Component } from 'react';
import './comp-btn.css';
import Icon from '../comp-icon/comp-icon'

class Btn extends Component{
  render(){
	  return (
      <div className="btn-container">
        <div className="row">
          <div className="col-10 col-title">
            <p className="a-title">{this.props.title}</p>
          </div>
          <div className="col-2 col-arrow">
            <i className={this.props.iconclass}></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Btn