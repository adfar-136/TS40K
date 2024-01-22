import React from "react"
export default class Course extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0,
            name:"Adfar",
            number:100
        }
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({number:this.state.number-1})
    }
    render(){
        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleIncrement}>Increment</button>
            <h1>{this.state.name}</h1>

            <h1>{this.state.number}</h1>
            <button onClick={this.handleDecrement}>Decrement</button>
            <h1>{this.props.name}</h1>
            <h1>{this.props.salary}</h1>
            <ul>{this.props.skills.map((item,index)=><li>{item}</li>)}</ul>
             <h1>My first Class based component</h1>
            </>
        )
    }
}