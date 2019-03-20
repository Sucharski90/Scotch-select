import React, { Component } from 'react';


export default class Filter extends Component {
    render() {
      return (
        <div className="Filter">
        <div className="search-bar">
          <h4>Search:</h4>
          <div>
          <span>Region</span>
          <select name="region" className="region" onChange={this.props.change}>
            <option vlaue="All">All</option>
            <option vlaue="Islay">Islay</option>
            <option vlaue="Speyside">Speyside</option>
            <option vlaue="Highland">Highland</option>
            <option vlaue="Lowland">Lowland</option>
            <option vlaue="Campbeltown">Campbeltown</option>
            </select>
            </div>


          <div>
          <span>Age</span>  
          <select name="age" className="age" onChange={this.props.change}>
            <option vlaue="All">All</option>
            <option vlaue="Not Stated">Not Stated</option>
            <option vlaue="5 Year">5 Year</option>
            <option vlaue="Between 5 and 10">Between 5 and 10</option>
            <option vlaue="10 years">10 Year</option>
            <option vlaue="Over 10 year">Over 10 year</option>
            </select>
            </div>

            <div>
            <span>Finish</span>    
            <select name="finish" className="finish" onChange={this.props.change}>
            <option vlaue="All">All</option>
            </select>
            </div>

            <div>
            <span>Peat</span>
            <select name="peated" className="peated" onChange={this.props.change}>
            <option vlaue="All">All</option>
            <option vlaue="Yes">Yes</option>
            <option vlaue="No">No</option>
            </select>
            </div>
          
            <div>
            <span>Single Malt or Blend</span>
            <select name="malt" className="malt" onChange={this.props.change}>
            <option vlaue="All">All</option>
            <option vlaue="Single Malt">Single Malt</option>
            <option vlaue="Blend">Blend</option>
            </select>
            </div>
            
            </div>
        </div>
      );
    }
  }
  
  