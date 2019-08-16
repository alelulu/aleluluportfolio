import React, { Component } from 'react';
import './comp-img.css';

class Img extends Component{
  render(){
	  return (
      <div className="img-container container">
        <div className="row">
          <div className="col">
            <img id="avatar-img" src="https://i.kym-cdn.com/entries/icons/medium/000/026/489/crying.jpg" alt="Foto Ale"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Img;


