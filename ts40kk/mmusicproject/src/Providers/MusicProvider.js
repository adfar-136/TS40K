import { createContext, useContext, useState } from "react";

const MusicContext = createContext()

export const MusicProvider = ({children}) =>{
   const [selectedMusic,setSelectedMusic] = useState({})
   const [condition,setCondition] = useState(false)
   return (
    <MusicContext.Provider value={{selectedMusic,setSelectedMusic,condition,setCondition}}>
      {children}
    </MusicContext.Provider>
   )
}
export const useMusic =()=>{
    return useContext(MusicContext)
}