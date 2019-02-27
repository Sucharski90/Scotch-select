import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Store from './Components/Store';
import Filter from './Components/Filter';
import Results from './Components/Results';
import scotchData from './Components/data/scotchData';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
      </div>
      </Router>
    );
  }
}

export default App;
