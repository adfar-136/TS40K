import React, { useReducer } from 'react'
const reducer =(state,action)=>{
   switch(action.type){
    case "red":
        return {color:action.payload}
     
    default:
        return state
   }
}
export default function Background() {
    const [state,dispatch] = useReducer(reducer,{color:"white"})
  return (
    <div>
        <div style={{width:"200px",height:"200px",border:"2px solid",backgroundColor:state.color}}></div>
        <button onClick={()=>dispatch({type:"red",payload:"red"})}>Red</button>
        <button onClick={()=>dispatch({type:"red",payload:"blue"})}>Blue</button>
        <button onClick={()=>dispatch({type:"red",payload:"pink"})}>Pink</button>
        <button onClick={()=>dispatch({type:"red",payload:"green"})}>Green</button>
        <button onClick={()=>dispatch({type:"red",payload:"orange"})}>orange</button>
        
    </div>
  )
}
