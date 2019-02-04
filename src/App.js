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
      scotchData,
      filteredData : scotchData,
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
  }
  change(event) {
    let name = event.target.name
    let value = event.target.value

    this.setState({
      [name] : value
    }, () => {
      console.log(this.state)
    })
    console.log(event.target.value)
    this.filteredData()
  }

  filteredData() {
    
    var newData = this.state.scotchData.filter((item) => {
        return this.state.region
    })

    if(this.state.region !== "All"){
      newData = newData.filter((item) => {
        return item.region === this.state.region
      })
    }

    if(this.state.age !== "All"){
      newData = newData.filter((item) => {
        return item.age === this.state.age
      })
    }

    this.setState({
      filteredData : newData
      
    })
}

  render() {
    return (
      <div className="App">
        <Header />
        <Filter change={this.change}/>
        <Results scotchData={this.state.filteredData} />
      </div>
    );
  }
}

export default App;
