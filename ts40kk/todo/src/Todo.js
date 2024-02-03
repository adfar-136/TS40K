import React,{useState} from 'react'
import "./App.css"
import SideNav from './SideNav'
import MainSection from './MainSection'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
export default function Todo({user}) {
  const [active,setActive] = useState("INBOX")
  const navigate = useNavigate() 
    const handleSignout =()=>{  
        signOut(auth).then(()=>{
            navigate("/")
        })
    }
     
  return (
    <>
        {user ?(
          <>
            <div className='container'>
          <h1>{user}'s Todo Application</h1>
          <div className="row">
             <div className="item item1">
               <SideNav change={setActive}/>
             </div>
             <div className='item item2'>
                <MainSection active={active}/>
             </div>
          </div>
        </div>
        <button onClick={handleSignout}>Signout</button>
          </>
          
        ):(
          <>
             <div>
                <h1>User is not logged in, Login first</h1>
                <button onClick={()=>navigate("/signin")}>Login</button>
            </div>
          </>
        )}   
     </>
  )
}
