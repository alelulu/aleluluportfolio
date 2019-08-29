import React, { Component } from 'react';
//import './comp-menu.css';
import Btn from '../comp-btn/comp-btn';
import { Link } from 'react-router-dom';

class Menu extends Component{
  
  render(){
    console.log(this.props.language)
	  return (
      <div className="menu-container container">
        <div className="row nav-row">
          <div className="col-sm-4 col-md-2 col-lg-1 btn-container">
            <Link to="/about"><Btn title={this.props.language.language.menu.about} src="https://i.ibb.co/T1FsWfX/home.png"/></Link>
          </div>
          <div className="col-sm-4 col-md-2 col-lg-1 btn-container">
            <Link to="/projects"><Btn title={this.props.language.language.menu.projects} src="https://i.ibb.co/tPLBD8r/projects.png"/></Link>
          </div>
          <div className="col-sm-4 col-md-2 col-lg-1 btn-container">
            <Link to="/skills"><Btn title={this.props.language.language.menu.skills} src="https://i.ibb.co/w7FSRsQ/skills.png"/></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;


