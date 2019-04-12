import React from "react";
import Directions from "./Directions.js";
import Navbar from "./Navbar.js"
import Imagesbox from "./Imagesbox.js"
import Icons from "../FactionIcons.json";

class App extends React.Component{
    state = {
        //images: FactionIcons.json
        images: Icons,
        clicked: [],
        score: 0,
        topScore: 0,
        totalScore: 0,
        message: 'Go Stars!'
    }
// game logic here
// first if statement with! is saying "do not add all Ids"
// then it says if image is clicked then push that id# to the clicked array

    suffleFunction = (id)=>{
    let clicked = this.state.clicked;
    if(!clicked.includes(id)){
        clicked.push(id);
        
    }

    if(clicked.length === 12){
        this.setState({clicked: []})
    }
    if(this.state.score >= this.state.totalScore){
        this.setState({topScore: this.state.score + 1})
    }

    this.setState({
        score: clicked.length,
        totalScore: this.state.topScore,
        message: 'You win this round'
    })
    }

    render(){
        return (
            <div>
                <Navbar StarsMessage={this.state.message}/>
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
