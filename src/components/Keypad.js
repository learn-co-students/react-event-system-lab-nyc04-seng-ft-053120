import React, { Component } from 'react';
// Code Keypad Component Here

class Keypad extends Component {
    handleKeyUp  = () => {
        console.log("Entering password...")
    }

    render() {
      return (
        <input type="password" onKeyUp={this.handleKeyUp}/>
      )
    }
  }

  export default Keypad;