import React from 'react';
import './App.css';

import Skills from './components/comp-skills/comp-skills'

function App() {
  return (
    <div className="App">
      <div className="container window-content">
        <div className="row header navbar navbar-fixed-top">
          <h6 className="title"><img alt="cat-logo" src="https://i.ibb.co/PTYD9dS/Cat.png"/> ALELULU - FRONT-END DEVELOPER</h6>
        </div>
        <div className="row body">
          <div className="col-6">
            <h5>hire me pls i have 3 cats to feed u.u</h5>
          </div>
          <div className="col-6">
            <Skills/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
