import React, { Component} from 'react';

export default class Results extends Component {
    constructor () {
        super()
        this.state = {
            name: 'matt'
        }
        this.loopData = this.loopData.bind(this)
    }

    loopData () {
        let {scotchData} = this.props

        if (scotchData === undefined || scotchData.length === 0) {
            return "Sorry your filter did not match any of our listings"
          }

          return scotchData.map((scotchData, index) => {
            return (
                <section className="listings-results" key={index}>
                    <div className="results">
                        <span className="region">Region: {scotchData.region}</span> 
                            <span className="malt">Malt: {scotchData.malt}</span>
                            <span className="age">Malt: {scotchData.age}</span>
                            <span className="name">Name: {scotchData.name}</span>  
                    </div>
          
                  </section>
          
        )
    })
  }
    render () {
        return (
          <section className="results-section">
                {this.loopData()}
                </section>
        )
}
}
