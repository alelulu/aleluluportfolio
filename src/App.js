import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import ViewAbout from './components/comp-views/comp-view-about'
import ViewProjects from './components/comp-views/comp-view-projects';
import ViewSkills from './components/comp-views/comp-view-skills';
import es from './assets/data/es.json'
import en from './assets/data/en.json'

class App extends Component {
  constructor(props) {
		super(props)
		this.state = {
      language: en
    }
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage() {
    let languageSwitch = document.getElementsByClassName("languageSwitch")

    if(languageSwitch[0].checked){
      this.setState({language: en})
      window.language = en
    }
    else {
      this.setState({language: es})
      window.language = es
    }
  } 
  render() {
    return (
      <div className="App container">
        <div className="window-content">
          <div className="fluid-container">
            <div className="row header navbar navbar-fixed-top">
              <div className="col col-title">
                <h6 className="title"><img alt="cat-logo" src="https://i.ibb.co/PTYD9dS/Cat.png"/><span> ALELULU<span className="front">{this.state.language.language.header.title}</span></span></h6>
              </div>
              <div className="">
                <span className="mr-1 lenguage">Es</span> 
                <label className="switch">
                  <input className="languageSwitch" type="checkbox" onClick={this.changeLanguage} defaultChecked/>
                  <span className="slider round"></span>
                </label> 
                <span className="ml-1 lenguage">En</span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="menu-container container">
              <div className="row nav-row">
                <div className="col-sm-4 col-md-2 btn-container">
                  <Link to="/about">
                    <img alt="About" src="https://i.ibb.co/VV6W74y/home.png" className="nav-icon"/>
                    <p className="nav-title">{this.state.language.language.menu.about}</p>
                  </Link>
                </div>
                <div className="col-sm-4 col-md-2 btn-container">
                  <Link to="/projects">
                    <img alt="Projects" src="https://i.ibb.co/2KKPmnS/projects.png" className="nav-icon"/>
                    <p className="nav-title">{this.state.language.language.menu.projects}</p>
                  </Link>
                </div>
                <div className="col-sm-4 col-md-2 btn-container">
                  <Link to="/skills">
                    <img alt="Skills" src="https://i.ibb.co/YkMwSg4/skills.png" className="nav-icon skills-icon"/>
                    <p className="nav-title">{this.state.language.language.menu.skills}</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row body">
              <div className="col-sm-12 views">
                <Switch>
                  <Route exact path='/' component={() => {return <ViewAbout language={this.state.language}/>}}/>
                  <Route path='/about' component={() => {return <ViewAbout language={this.state.language}/>}}/>
                  <Route path='/projects'  component={() => {return <ViewProjects language={this.state.language}/>}}/>
                  <Route path='/skills' component={() => {return <ViewSkills language={this.state.language}/>}}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
