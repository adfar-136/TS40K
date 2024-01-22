import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        super()
        console.log("I am Constructor");
        this.state = {
            firstName:"React",
            count:0
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log("i am static method")
    //     return {firstName:props.name}
    // }
     componentDidMount(){
        // fetch("https://official-joke-api.appspot.com/random_joke")
        // .then(result=>result.json()).then(response=>console.log(response))
        console.log("mounting")
      }
      shouldComponentUpdate(nextProps,nextState){
        console.log("component");
        console.log(nextProps,nextState);
        if(nextState.count >= 13){
            return false;
        }
        return true
      }
      componentDidUpdate(prevProps,prevState){
        console.log("Update");
        console.log(prevProps,prevState);
        if(prevState.count===10){
            this.setState({firstName:"Congratulation you have reached 10 level"})
        }
      }
  render() {
    console.log("i am render")
    return (
      <div>
        <h1>Lifecycle methods</h1>
        <h1>Hello {this.state.firstName}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      </div>
    )
  }
  
}
