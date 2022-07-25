import React from "react";
import HornedBeast from "./HornedBeast";
import MainStretch from "./mainStretch";
import beast1 from "../images/ancestor_spirit.jpg";
import beast2 from "../images/fallingstar-beast.webp";



class Main extends React.Component {

    render() {
        return (
            <div title="containerDiv">               
               <div>
                <HornedBeast />
               </div>
            </div>
        )
    }
}

export default Main;