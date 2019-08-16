import React from 'react';
import './App.css';

import Img from './components/comp-img/comp-img'
import Menu from './components/comp-menu/comp-menu'
import Skills from './components/comp-skills/comp-skills'
import ViewAbout from './components/comp-views/comp-view-about'

function App() {
  return (
    <div className="App container">
      <div className=" window-content">
    
        <div className="row header navbar navbar-fixed-top">
          <h6 className="title"><img alt="cat-logo" src="https://i.ibb.co/PTYD9dS/Cat.png"/> ALELULU/FRONT-END DEVELOPER</h6>
        </div>
        <div className="row mt-2">
          <div className="col-5 offset-7 col-md-3 offset-md-9">
            <span className="mr-1 lenguage">Es</span> 
            <label className="switch">
              <input type="checkbox" defaultChecked/>
              <span className="slider round"></span>
            </label> 
            <span className="ml-1 lenguage">En</span>
          </div>
        </div>
        <div className="row avatar">
          
        </div>
        <div className="row body">
          <div className="col-sm-4">
            <Menu/>
          </div>
          <div className="col-sm-8">
            <ViewAbout/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
