import React, { Component } from 'react'

export default class SideEffect extends Component {
    constructor(){
        super()
        this.state = {
            timer : 0,
        }
    }
    componentDidMount(){
        this.time()
    }
    componentDidUpdate(){
        clearInterval(this.interval)
        this.time()
    }
    time(){
       this.interval = setInterval(()=>{
            console.log("hello")
        },3000)
    }
  render() {
    return (
      <div>
        <h1>{this.state.timer}</h1>
        <button onClick={()=>this.setState({timer:this.state.timer+1})}>Update</button>
      </div>
    )
  }
}
