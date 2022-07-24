import React from "react";
import beast1 from "./images/ancestor_spirit.jpg";
import beast2 from "./images/fallingstar-beast.webp";

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
    }]
    ;

class Main extends React.Component {

    render() {
        return (
            <div title="containerDiv">
                <div className="beastTitle">
                    <h2>{mythicalBeasts[0].title}</h2>
                </div>

                <div>
                    <img src={mythicalBeasts[0].image_url} className='hornedBeast' alt="Ancestor Spirit" />
                </div>

                <div className="hornedBeastParagraph">
                    <p>{mythicalBeasts[0].description}</p>
                </div>

                <div className="beastTitle">
                    <h2>{mythicalBeasts[1].title}</h2>
                </div>
                <div>
                    <img src={mythicalBeasts[1].image_url} className='hornedBeast' alt="Fallingstar Beast" />
                </div>

                <div className="hornedBeastParagraph">
                    <p> {mythicalBeasts[1].description}</p>
                </div>
            </div>
        )
    }
}

export default Main;