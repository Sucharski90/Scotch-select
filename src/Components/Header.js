import React, { Component } from 'react';
import Nav from './Nav';



export default class Header extends Component {
  
    render() {
      return (
        <div className="header">
        <Nav />
          <a href='/home'><h1>Whiskey</h1></a>
          
          
        </div>
      );
    }
  }
  
  