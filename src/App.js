import React,{useEffect,useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './st.css'

import { Component } from 'react'
import { render } from '@testing-library/react'
 class App extends Component{
     constructor(props){
         super(props);
         this.state={
             counter:0
         }
     }
 

increment=()=>{
    
    this.setState({counter:this.state.counter+1})
}
decrement=()=>{
    if(this.state.counter >0){

    }
    this.setState({counter:this.state.counter-1})
}
reset=()=>{
    this.setState({counter:0})
}

  render(){ 
      return (
        <>
            <div className="app">
                <button onClick={this.increment} className="counter">+</button>
                <button onClick={this.decrement} className="counter">-</button>
                <button onClick={this.reset} className="reset">Reset</button>
                <h3>{this.state.counter}</h3>
            </div>
        </>
        
    )
}
}
export default App