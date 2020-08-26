// Code Keypad Component Here
import React, { Component } from 'react';


class Keypad extends Component {
   
   onKeyUp = (event)=> {
       console.log('Entering password...')

   }

    render() {
      return  (
          <div>
        <input type="password" onKeyUp={this.onKeyUp} /> 
        </div>
      )
    

    }
      
      
    
    
}





export default Keypad;