import React, { Component } from 'react'
import Filter from './Filter';
import Results from './Results';
import scotchData from './data/scotchData';

export default class Japanese extends Component {
    constructor () {
        super()
        this.state = {
          scotchData,
          region : "All",
          age : "All",
          finish : "All",
          min_price : 0,
          peat : "All",
          malt : "All",
          abv : "All",
          name : "All",
          filteredData : scotchData
        }
        this.change = this.change.bind(this)
        this.filteredData = this.filteredData.bind(this)
      }
      change(event) {
        let name = event.target.name
        let value = event.target.value
    
        this.setState({
          [name]: value
        }, () => {
          console.log(this.state)
          this.filteredData()
        })
      }
    
      filteredData() {
        
        let newData = this.state.scotchData.filter((item) => {
          return 2+2
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
    
    
        this.setState(() => ({
          filteredData : newData 
        }))
    }
    render () {
        return (
            <div>
               <Filter change={this.change} globalState={this.state}/>
                <Results scotchData={this.state.filteredData}/>
            </div>
        )
    }
}