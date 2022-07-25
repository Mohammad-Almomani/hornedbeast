import React from "react";
import beast1 from "../images/ancestor_spirit.jpg";
import beast2 from "../images/fallingstar-beast.webp";


let horned1 = require('./data.json');

let mythicalBeasts = [
    {
        "image_url": beast1,
        "title": "Ancestor Spirit",
        "description": "A glowing spirit that takes the form of a large deer, making it a menacing threat when charging at targets.",
        "keyword": "ancestor-spirit",
        "horns": 4
    },

    {
        
        "image_url": beast2,
        "title": "Fallingstar Beast",
        "description": "Fallingstar Beast is a massive quadruped with a body covered in crystals.",
        "keyword": "fallingstar",
        "horns": 2
    }];

    let horned = horned1.concat(mythicalBeasts);

    // horned.forEach(element => { element.state = {
    //     clickCounter: 0
    //   } })

// reference for loop in react https://stackabuse.com/how-to-loop-in-react-jsx/

class MainStretch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          clickCounter: 0
        }
      }
      
      handleClick = () => {
          this.setState({clickCounter: this.state.clickCounter + 1})
        }
        
            

    render() {
        return (
            horned.map((beast) => (
                <div title="containerDiv">
                    <div className="beastTitle">
                        <h2 key={beast.id}>
                            {beast.title}
                        </h2>
                    </div>
                    <div>
                        <img src={beast.image_url} className='hornedBeast' alt={beast.title} onClick={this.handleClick} />
                        <span>👏{this.state.clickCounter}</span>
                    </div>
                    <div className="hornedBeastParagraph">
                    <p key={beast.id}>
                        {beast.description}
                    </p>
                    </div>
                </div>
            )))
    }
}
export default MainStretch;