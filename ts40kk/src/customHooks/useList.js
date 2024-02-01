import { useState } from "react"

const useList = ()=>{
    const [list,setList] = useState(["Item1","item2"]);
    const push=(item)=>{
     const x = list.concat(item)
     setList(x)
    }
    const pull=(index)=>{
      const x = list.filter((item,itemIndex)=>{
        return itemIndex !== index;
      })
      setList(x)
    }
    return {
        list:list,
        push:push,
        pull:pull
    }
}
export default useList