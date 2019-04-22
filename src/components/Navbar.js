import React from "react";

const NavBar = props => {
    return (
      <div>
        <span>Score {props.score}</span>
        <span>Message {props.message}</span>
        <span>Top Score{props.topScore}</span>
        <span>{}</span>
      </div>
    );
  };
  
  export default NavBar;