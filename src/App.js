import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Filter from './Components/Filter';
import Results from './Components/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Results />
      </div>
    );
  }
}

export default App;
