import React, { Component } from 'react';
import Nav from './Nav';



export default class Header extends Component {
  
    render() {
      return (
        <div className="header">
        <Nav />
          <h1>Whiskey</h1>
          <div className="bookmark">
            <i className="far fa-bookmark">List</i>
          </div>
          
        </div>
      );
    }
  }
  
  