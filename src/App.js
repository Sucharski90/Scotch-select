import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Store from './Components/Store';
import American from './Components/American';
import Irish from './Components/Irish';
import Japanese from './Components/Japanese';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/american" component={American} />
        <Route path="/irish" component={Irish} />
        <Route path="/japanese" component={Japanese} />
      </div>
      </Router>
    );
  }
}

export default App;
