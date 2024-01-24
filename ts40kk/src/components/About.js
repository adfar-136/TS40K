import { useContext } from "react"
import { UserContext } from "../Providers/UserProvider"
export default function About(){
    const {user,setUser,signUp} = useContext(UserContext)
    // console.log(props)
    return (
        <div>
            <h1>About Component</h1>
            <h1>My name is {user}</h1>
            
        </div>
    )
}