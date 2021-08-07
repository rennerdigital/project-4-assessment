import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector.jsx';
import Circles from './components/Circles/Circles.jsx';

class App extends Component {

  state ={
    selectedCircle: 1,
  }

  updateSelected = (number) => {
    this.setState ({
      selectedCircle: number,

    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          

          <CircleSelector
           handleClick={this.updateSelected}
          />


          <Circles
          selectedCircle={this.state.selectedCircle}
          />


        </main>
      </div>
    );
  }
}

export default App;
