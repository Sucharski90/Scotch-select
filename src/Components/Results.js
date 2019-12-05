import React, { Component} from 'react';


export default class Results extends Component {
    constructor () {
        super()
        this.state = {
            
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
                <section className="listings-results" key={index} onClick={this.modal}>

                
                    <div className="results">

                        <div className="img" style={{background:`url("${scotchData.image}") no-repeat center center`}}></div>
                    
                    <div className="info">
                        <span className="region">Region: {scotchData.region}</span> 
                            <span className="malt">Malt: {scotchData.malt}</span>
                            <span className="age">Age: {scotchData.age}</span>
                            <span className="name">Name: {scotchData.name}</span> 
                            <i className="far fa-thumbs-up"></i> 
                            </div>       
                    </div>
                  </section>
          
        )
        
    })
  }
    render () {
        return (
            <div className="container">
          <section className="results-section">
                {this.loopData()}
                </section>
                </div>
        )
}
}


    

