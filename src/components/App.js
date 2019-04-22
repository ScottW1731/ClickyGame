import React from "react";
import Directions from "./Directions.js";
import Navbar from "./Navbar.js"
import Imagesbox from "./Imagesbox.js"
import Icons from "../FactionIcons.json";
import "./style.css"


// all pages called here
class App extends React.Component{
    state = {
        //images: FactionIcons.json
        images: Icons,
        clicked: [],
        score: 0,
        topScore: 0,
        totalScore: 0,
        message: 'start by clicking an image, but no image more than once'
    }
// game logic here
// first if statement with! is saying "do not add all Ids"
// then it says if image is clicked then push that id# to the clicked array

    suffleFunction = (id)=>{
    let clicked = this.state.clicked;
    if(!clicked.includes(id)){
        clicked.push(id);
        if(clicked.length === 12){
            this.setState({clicked: []})
        }
        if(this.state.score >= this.state.totalScore){
            this.setState({topScore: this.state.score })
        }
        this.setState({
            score: clicked.length,
            totalScore: this.state.topScore,
            message: 'WINNER! HIGHSCORE!'
        });
        // random position generator
        let a = Icons.length,
        j,
        temp;
      while (--a > 0) {
        j = Math.floor(Math.random() * (a + 1));
        temp = Icons[j];
        Icons[j] = Icons[a];
        Icons[a] = temp;
    } 
  } else {
      // this statement 
    this.setState({
      clicked: [],
      score: 0,
      totalScore: this.state.topScore,
      message: 'WRONG! WRONG!'
    });
  }
    }

    render(){
        return (
            <div>
                <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
                <Directions/>
                <Imagesbox
                          suffleFunction={this.suffleFunction}
                          images={this.state.images}                
                />
            </div>
        )
    }
}




export default App;
