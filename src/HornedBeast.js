import React from "react";

// let mythicalBeasts = [
//     {
//         "image_url": beast1,
//         "title": "Ancestor Spirit",
//         "description": "A glowing spirit that takes the form of a large deer, making it a menacing threat when charging at targets.",
//         "keyword": "ancestor-spirit",
//         "horns": 4
//     },

//     {
//         "image_url": beast2,
//         "title": "Fallingstar Beast",
//         "description": "Fallingstar Beast is a massive quadruped with a body covered in crystals.",
//         "keyword": "fallingstar",
//         "horns": 2
//     }]
//     ;

class HornedBeast extends React.Component {

    render() {
        return (
            <div title="containerDiv">
                <div className="beastTitle">
                    <h2>{this.props.title}</h2>
                </div>

                <div>
                    <img src={this.props.image_url} className='hornedBeast' alt={this.props.title} />
                </div>

                <div className="hornedBeastParagraph">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default HornedBeast;