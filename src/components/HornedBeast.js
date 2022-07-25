import React from "react";

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
            
                <div title="containerDiv">
                    <div className="beastTitle">
                        <h2> {this.props.title}</h2>
                    </div>
                    <div>
                        <img src={this.props.image_url} className='hornedBeast' alt={this.props.title} />
                        <div>
                            <button onClick={this.handleLike} >Likes {this.state.likes}</button>    
                            <button onClick={this.handleDisLike} >DisLikes{this.state.disLikes}</button>
                        </div>
                    </div>
                    <div className="hornedBeastParagraph">
                    <p> {this.props.description}
                    </p>
                    </div>
                </div>
            )
    }
}
export default HornedBeast;