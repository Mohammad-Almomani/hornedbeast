import React from "react";
import Cards from "./HornedBeast";
import beast1 from "../images/ancestor_spirit.jpg";
import beast2 from "../images/fallingstar-beast.webp";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

let horned1 = require('./data.json');

let mythicalBeasts = [
    {
        "_id": 21,
        "image_url": beast1,
        "title": "Ancestor Spirit",
        "description": "A glowing spirit that takes the form of a large deer, making it a menacing threat when charging at targets.",
        "keyword": "ancestor-spirit",
        "horns": 100
    },

    {
        "_id": 22,
        "image_url": beast2,
        "title": "Fallingstar Beast",
        "description": "Fallingstar Beast is a massive quadruped with a body covered in crystals.",
        "keyword": "fallingstar",
        "horns": 2
    }];

    let horned2 = horned1.concat(mythicalBeasts);



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''
        };
    
        
      }
    

      
      findHorned = (e) => {
          console.log(e.target.value)
          return this.setState({value: e.target.value}); 

      }
      render() {
          console.log(this.state.value);
          
          return (
              <div> 
                <input type="text" placeholder="Search title or horns no." onChange={(e)=>this.findHorned(e)} />
                <>
            <Row xs={1} sm={2} md={3} className="g-4">
                {
                    (((horned2.filter(beastInfo => (beastInfo.horns == this.state.value)) !='')? horned2.filter(beastInfo => beastInfo.horns == this.state.value):
                    horned2.filter(beastInfo => (beastInfo.title.toLowerCase().includes(this.state.value.toLowerCase())) !=[])? horned2.filter(beastInfo =>beastInfo.title.toLowerCase().includes(this.state.value.toLowerCase())):
                     horned2)).map( beast => 
                        <Col key={beast._id}>
                <Cards id={beast._id} title={beast.title} image_url={beast.image_url} description={beast.description} />
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