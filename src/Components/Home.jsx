import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Footer from './Footer';


export default class Home extends Component {
    render() {
        return (
            <div>
            {/* hero image */}
            <div className='hero'>
            {/* hero text */}
            <div className='hero-text'>
                <h1>Whiskey</h1>
                    <h2>The Water of Life</h2>
            <Link to="/store">
                <button>Scotch</button>
            </Link>

            <Link to="/american">
                <button>American</button>
            </Link>

            <Link to="/store">
                <button>Irish</button>
            </Link>

            <Link to="/store">
                <button>Japanese</button>
            </Link>
            </div>
            </div>
            
            {/* section under hero */}
            <div className='option-section'>
                <div className='threeSection'>
                    <div className='threeSection-content'>
                    <h3>History</h3>
                    <p>Explore the history of fine aged spirits</p>
                </div>
                </div>
                <div className='threeSection'>
                <div className='threeSection-content'>
                    <h3>Types</h3>
                    <p>There are many different types of whiskies, find what type best fits your taste</p> 
                </div>
                </div>
                <div className='threeSection'>
                <div className='threeSection-content'>
                    <h3>Ways to Enjoy</h3>
                    <p>Weather its neat or on the rocks, discover ways to get the most out of the whisky experiance</p>
                </div>
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}