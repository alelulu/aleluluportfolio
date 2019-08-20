import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Img from './components/comp-img/comp-img'
import Menu from './components/comp-menu/comp-menu'
import ViewAbout from './components/comp-views/comp-view-about'
import ViewProjects from './components/comp-views/comp-view-projects';
import ViewSkills from './components/comp-views/comp-view-skills';

function App() {
  return (
    <div className="App container">
      <div className="window-content">
        <div className="fluid-container">
          <div className="row header navbar navbar-fixed-top">
            <h6 className="title"><img alt="cat-logo" src="https://i.ibb.co/PTYD9dS/Cat.png"/> ALELULU/FRONT-END DEVELOPER</h6>
          </div>
        </div>
        <div className="container">
          <div className="row nav">
            <div className="col">
              <Menu/>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-5 offset-7 col-md-3 offset-md-9">
              <span className="mr-1 lenguage">Es</span> 
              <label className="switch">
                <input type="checkbox" checked/>
                <span className="slider round"></span>
              </label> 
              <span className="ml-1 lenguage">En</span>
            </div>
          </div>

          <div className="row body">
            <div className="col-sm-12 views">
              
                <Switch>
                  <Route exact path='/' component={ViewAbout}/>
                  <Route path='/about' component={ViewAbout}/>
                  <Route path='/projects' component={ViewProjects}/>
                  <Route path='/skills' component={ViewSkills}/>
                </Switch>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
