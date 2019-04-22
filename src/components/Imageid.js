import React from "react";
import "./style.css"

const ImageIcon = ({ image, name, suffleFunction, id }) => {
  console.log(id)
    return (
      <div className="container" >
        <img className="image-container" src={image} alt={name} onClick={() => suffleFunction(id)} />
      </div>
    );
  };
  
  export default ImageIcon;
  