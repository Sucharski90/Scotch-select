import React, { Component } from 'react'
import Footer from './Footer';

export default class Enjoy extends Component {
    render() {
        return (
            <div className='enjoy-page'>
            <div className='enjoy'>
                    <div className="enjoy-text">
                    <h1>Common Ways to Enjoy</h1>
                    <h3>On the Rocks, Neat, Mixed</h3> 
                    </div>
                </div>

                <div className="enjoy-article">
                <div className="neat">
                    <p>Neat is used to order a drink that is served with no ice or mixers. It is, quite simply, a straight pour of liquor from the bottle into the glass. Neat drinks are also served at room temperature. It's similar to drinks on the rocks, in that the drink is designed to be sipped slowly so you can enjoy the distilled spirit's unadulterated taste, but without the dilution.</p>
                    <p>Whiskey and brandy are most often ordered neat because many drinkers prefer to drink them at room temperature. Top-shelf tequilas and vodkas are commonly served neat as well.</p>
                    <p>While sippers of these liquors are thought of as neat drinks, the term can technically be applied to shots, too. In this case, however, the word straight is used most often. For instance, most people would order a straight shot of tequila rather than a neat shot. Essentially, in this context, neat has more of an upscale, fancy connotation while straight feels more like a fun drunken party.</p>
                </div>

                <div className="on-rocks">
                    <p>Ordering a whiskey “on the rocks” may sound cool, but it may not necessarily be what you want. “Ice actually numbs your palate and dulls the flavors,” Tardie laments. “But hey, sometimes you just want a cold glass of whiskey — I say go for it.”</p>
                    <p>As for the type of ice, you’re best off going with a large ice cube or ice ball. Small cubes or chunks of ice will melt faster than larger pieces, diluting your whiskey more quickly. If you want the chilling effect without the dilution, you might consider adding chilled whiskey stones</p>
                </div>
                </div>
            <Footer/>
            </div>
        )
    }
}