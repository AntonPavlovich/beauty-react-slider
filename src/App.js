import "./App.css";
import React from "react";
import Carousel from "./components/Carousel/Carousel";
import {myImages} from './data.js'

class App extends React.Component{
  

  render () {
    return (
      <div className="App">
        <Carousel images={myImages}/>
      </div>
    );
  }
}



export default App;
