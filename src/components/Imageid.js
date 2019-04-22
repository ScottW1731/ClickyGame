import React from "react";


const ImageIcon = ({ image, name, suffleFunction, id }) => {
  console.log(id)
    return (
      <div>
        <img class={icon} src={image} alt={name} onClick={() => suffleFunction(id)} />
      </div>
    );
  };
  
  export default ImageIcon;
  