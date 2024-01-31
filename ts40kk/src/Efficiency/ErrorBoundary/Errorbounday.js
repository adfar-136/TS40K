import React, { Component } from 'react'

export default class Errorbounday extends Component {
    constructor(){
        super()
        this.state={
           error:null,
           errorInfo:null,
        }
    }
    componentDidCatch(error,info){
        this.setState({
            error:error,
            errorInfo:info,
        })
    }
  render() {
    if(this.state.errorInfo){
        return (
            <div>
                <h1>Oops...</h1>
                <p>{this.state.error.message}</p>
            </div>
        )
    }
    return this.props.children;
  }
}
