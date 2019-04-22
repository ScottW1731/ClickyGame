import React from "react";
import "./style.css"

const ImageIcon = ({ image, name, suffleFunction, id }) => {
  console.log(id)
    return (
      <div className="images-container" >
        <img className="images" src={image} alt={name} onClick={() => suffleFunction(id)} />
      </div>
    );
  };
  
  
  export default ImageIcon;
  