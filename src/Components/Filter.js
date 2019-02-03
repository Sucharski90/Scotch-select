import React, { Component } from 'react';


export default class Filter extends Component {
    render() {
      return (
        <div className="Filter">
          <h4>Search</h4>
          <span>Region</span>
          <select name="region" className="region">
            <option>Any</option>
            <option>Islay</option>
            <option>Speyside</option>
            <option>Highland</option>
            <option>Lowland</option>
            <option>Campbeltown</option>
            </select>

          <span>Age</span>  
          <select name="age" className="age">
            <option>Any</option>
            <option>No Age Statement</option>
            <option>5 Year</option>
            <option>Between 5 and 10</option>
            <option>10 Year</option>
            <option>Over 10 year</option>
            </select>

            <span>Finish</span>    
            <select name="finish" className="finish">
            <option>Any</option>
            
            </select>

            <span>Peat</span>
            <select name="peated" className="peated">
            <option>Any</option>
            <option>Yes</option>
            <option>No</option>
            </select>
          
            <span>Single Malt or Blend</span>
            <select name="malt" className="malt">
            <option>Any</option>
            <option>Single Malt</option>
            <option>Blend</option>
            </select>
            

        </div>
      );
    }
  }
  
  