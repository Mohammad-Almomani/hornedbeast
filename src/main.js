import React from "react";
import HornedBeast from "./HornedBeast";
import MainStretch from "./mainStretch";
import beast1 from "./images/ancestor_spirit.jpg";
import beast2 from "./images/fallingstar-beast.webp";



class Main extends React.Component {

    render() {
        return (
            <div title="containerDiv">
                <div>
                    <HornedBeast title="Ancestor Spirit" image_url={beast1} description="A glowing spirit that takes the form of a large deer, making it a menacing threat when charging at targets." />
                    <HornedBeast title="Fallingstar Beast" image_url={beast2} description="Fallingstar Beast is a massive quadruped with a body covered in crystals." />
                </div>
               
               <div>
                <MainStretch />
               </div>
            </div>
        )
    }
}

export default Main;