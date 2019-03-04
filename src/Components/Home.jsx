import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div>
            {/* hero image */}
            <div className='hero'>
            {/* hero text */}
            <div className='hero-text'>
                <h1>Scotch</h1>
                    <h2>The Water of Life</h2>
            <Link to="/store">
                <button>About</button>
            </Link>
            </div>
            </div>
            
            {/* section under hero */}
            <div className='option-section'>
                <div className='threeSection'>
                    <div className='threeSection-content'>
                    <h3>History</h3>
                    <p>Explore the history of this fine aged spirit</p>
                </div>
                </div>
                <div className='threeSection'>
                <div className='threeSection-content'>
                    <h3>Regions</h3>
                    <p>There are six distinct whisky regions of Scotland, find which region best fits you</p> 
                </div>
                </div>
                <div className='threeSection'>
                <div className='threeSection-content'>
                    <h3>Ways to Enjoy</h3>
                    <p>Weather its neat or on the rocks, discover ways to get the most out of the whisky experiance</p>
                </div>
                </div>
            </div>
            </div>
        )
    }
}