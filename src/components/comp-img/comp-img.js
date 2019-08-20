import React, { Component } from 'react';
import './comp-img.css';

class Img extends Component{
  render(){
	  return (
      <div className="img-container container">
        <div className="row">
          <div className="col">
            <img id="avatar-img" src="https://i.ibb.co/Q99yp60/lale.png" alt="Foto Ale"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Img;


