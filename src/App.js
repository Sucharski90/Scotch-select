import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Filter from './Components/Filter';
import Results from './Components/Results';
import scotchData from './Components/data/scotchData';

class App extends Component {
  constructor () {
    super()
    this.state = {
      scotchData
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Results scotchData={this.state.scotchData} />
      </div>
    );
  }
}

export default App;
