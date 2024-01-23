import React, { useState } from 'react'
import Comp1 from './components/contextAPI/Comp1'
import StateProvider from './components/contextSTate/StateProvider'
const name = React.createContext()
const lastName = React.createContext()
export default function App() {
  const [state,setState] = useState("Hello")
  return (
    <div>
      <name.Provider value={{state,setState}}>
        <lastName.Provider value="React JS">
         <Comp1/>
        </lastName.Provider>
      </name.Provider>
      <StateProvider/>
    </div>
  )
}
export {name,lastName}