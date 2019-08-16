import React, { Component } from 'react';
import './comp-menu.css';
import Img from '../comp-img/comp-img';
import Btn from '../comp-btn/comp-btn';

class Menu extends Component{
  render(){
	  return (
      <div className="menu-container">
        <div className="row">
          <div className="col">
            <Img/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Btn title="Ale" iconclass="fas fa-chevron-right"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Btn title="Projects" iconclass="fas fa-chevron-right"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Btn title="Skills" iconclass="fas fa-chevron-right"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;