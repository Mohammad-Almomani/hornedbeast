import React from "react";
import Button from 'react-bootstrap/Button';
import beast1 from "../images/ancestor_spirit.jpg";
import beast2 from "../images/fallingstar-beast.webp";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

// reference for loop in react https://stackabuse.com/how-to-loop-in-react-jsx/

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          likes: 0,
          disLikes: 0,
        }
      }
      
      handleLike = () => {
          this.setState({likes: this.state.likes + 1})
        }
        handleDisLike = () =>{
        this.setState({disLikes: this.state.disLikes + 1})
    }
            

    render() {
        return (
         
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={this.props.image_url} />
              <Card.Body >
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  {this.props.description}
                </Card.Text>
                   {/* <button onClick={this.handleLike} >Likes {this.state.likes}</button>    
        <button onClick={this.handleDisLike} >DisLikes{this.state.disLikes}</button>
                        */}
                <Button variant="primary" onClick={this.handleLike}>Likes {this.state.likes}</Button>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            )
    }
}

export default HornedBeast;