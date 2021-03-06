import React from "react";
import Imageid from "./Imageid.js";

const Imagesbox = ({ images, suffleFunction }) => {
    const renderedId = images.map(image => {
      return (
        <Imageid
          key={image.id}
          id={image.id}
          name={image.name}
          image={image.Icon}
          suffleFunction={suffleFunction}
        />
      );
    });
    return <div>{renderedId}</div>;
  };

  // const Imagesbox = {

  // }
  
  export default Imagesbox;