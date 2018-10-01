

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  
  render() {
    const work = this.state.working ? 'play' : 'pause';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={work} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>

        <button 
          onClick={this.handleClick} 
          className={work}>{work.toUpperCase()}</button>
        

      
        <Lamp on />
        <Lamp />
        <Quotes/>
      </div>
    );
  }
}

export default App;
