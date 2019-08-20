import React, { Component } from 'react';
import './comp-menu.css';
import Img from '../comp-img/comp-img';
import Btn from '../comp-btn/comp-btn';
import { Link } from 'react-router-dom';

class Menu extends Component{
  render(){
	  return (
      <div className="menu-container container">
        <div className="row nav-row">
          <div className="col-sm-4 col-md-2 col-lg-1 btn-container">
            <Link to="/about"><Btn title="About" src="https://i.ibb.co/RN54ZBH/home.png"/></Link>
          </div>
          <div className="col-sm-4 col-md-2 col-lg-1 btn-container">
            <Link to="/projects"><Btn title="Projects" src="https://i.ibb.co/1b0MX8j/projects.png"/></Link>
          </div>
          <div className="col-sm-4 col-md-2 col-lg-1 btn-container">
            <Link to="/skills"><Btn title="Skills" src="https://i.ibb.co/37K3VK2/skills.png"/></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;


