import React from 'react'
import  ReactDOM  from 'react-dom'

export default function Modal({condition,children}) {
    if(!condition) return null;
    return  ReactDOM.createPortal(<div>
       {children}
    </div>,document.getElementById("container"))
  
}
