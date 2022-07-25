import Button from 'react-bootstrap/Button';
import beast1 from "../images/ancestor_spirit.jpg";
import beast2 from "../images/fallingstar-beast.webp";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


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


function BasicExample() {
  return (
    horned.map( beast =>
        <div className='cards'>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={beast.image_url} />
      <Card.Body >
        <Card.Title>{beast.title}</Card.Title>
        <Card.Text>
          {beast.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  ));
}

export default BasicExample;