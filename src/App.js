import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Filter from './Components/Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
      </div>
    );
  }
}

export default App;
