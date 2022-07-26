import React from "react";
import Cards from "./HornedBeast";
import beast1 from "../images/ancestor_spirit.jpg";
import beast2 from "../images/fallingstar-beast.webp";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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



class Main extends React.Component {

    render() {
        return (
            <div> 
                <>
            <Row xs={1} md={3} className="g-4">
                {
                    horned.map( beast => 
                        <Col>
                <Cards title={beast.title} image_url={beast.image_url} description={beast.description} />
            </Col>
            )
            }
            </Row>
            </>
            </div>
        )
    }
}

export default Main;