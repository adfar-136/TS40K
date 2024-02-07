import React, { Component } from 'react'
import { decrement, increment } from './store/action'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    const {count,increment,decrement} = this.props
    return (
      <div>
        <button onClick={()=>increment()}>Increment</button>
        <h1>{count}</h1>
        <button onClick={()=>decrement()}>Decrement</button>
      </div>
    )
  }
}
const mapStatetoProps = (state)=>(
    {
        count:state
    }
)
const mapDispatchToProps = (dispatch)=>(
    {
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())
    }
)
export default connect(mapStatetoProps,mapDispatchToProps)(Counter)