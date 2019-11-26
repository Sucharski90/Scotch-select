import React, { Component } from 'react';
import { Link } from 'react-router-dom';
     
class Sidenav extends Component {
  state = {
    isOpen: false,
  }
  handleOpen = () => {
    if(this.state.isOpen){
      this.setState({
        isOpen : false
      })
    } else {
      this.setState({
        isOpen : true
      })
    }
  } 
 
  render() {
    if (this.state.isOpen) {
        return (
            <div className="Sidenav">
            <button onClick={this.handleOpen} id="closebtn">&times;</button>

          <div id="mySidenav">
            
          <Link to="/home">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/enjoy">Ways to Enjoy</Link>
          <Link to="/enjoy">How its Made</Link>

          <h4>Search Types</h4>

            <Link to="/store">Scotch</Link>
            <Link to="/american">American</Link>
            <Link to="/irish">Irish</Link>
            <Link to="/japanese">Japanese</Link>
            
            
          </div>
          </div>
        );
      } else {
        return (
          <div className="Sidenavcl">
            <button onClick={this.handleOpen} >&#9776;</button>
            
          </div>
        );
      }
    }
}



export default Sidenav;