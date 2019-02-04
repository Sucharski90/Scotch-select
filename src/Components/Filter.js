import React, { Component } from 'react';


export default class Filter extends Component {
    render() {
      return (
        <div className="Filter">
          <h4>Search</h4>
          <span>Region</span>
          <select name="region" className="region" onChange={this.props.change}>
            <option vlaue="All">All</option>
            <option vlaue="Islay">Islay</option>
            <option vlaue="Speyside">Speyside</option>
            <option vlaue="Highland">Highland</option>
            <option vlaue="Lowland">Lowland</option>
            <option vlaue="Campbeltown">Campbeltown</option>
            </select>

          <span>Age</span>  
          <select name="age" className="age" onChange={this.props.change}>
            <option vlaue="All">All</option>
            <option vlaue="No Age Statement">No Age Statement</option>
            <option vlaue="5 Year">5 Year</option>
            <option vlaue="Between 5 and 10">Between 5 and 10</option>
            <option vlaue="10 Year">10 Year</option>
            <option vlaue="Over 10 year">Over 10 year</option>
            </select>

            <span>Finish</span>    
            <select name="finish" className="finish" onChange={this.props.change}>
            <option vlaue="All">All</option>
            
            </select>

            <span>Peat</span>
            <select name="peated" className="peated" onChange={this.props.change}>
            <option vlaue="All">All</option>
            <option vlaue="Yes">Yes</option>
            <option vlaue="No">No</option>
            </select>
          
            <span>Single Malt or Blend</span>
            <select name="malt" className="malt" onChange={this.props.change}>
            <option vlaue="All">All</option>
            <option vlaue="Single Malt">Single Malt</option>
            <option vlaue="Blend">Blend</option>
            </select>
            

        </div>
      );
    }
  }
  
  