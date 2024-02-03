import React,{useState} from 'react'
import style from "./signup.module.css"
import Inputform from '../Input/Inputform'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
export default function Signup() {
  const [value,setValue] = useState({
    name:"",
    email:"",
    password:"",
  })
  const [errMsg,setErrMsg] = useState("");
  const navigate = useNavigate()
  const handleSubmission=()=>{
    if(!value.name || !value.email || !value.password){
      setErrMsg("Please Fill All Feilds");
      return
    }
    setErrMsg("")
    createUserWithEmailAndPassword(auth,value.email,value.password)
    .then((response)=>{
      const user = response.user;
      console.log(user);
      updateProfile(user,{
        displayName:value.name
      })
      navigate("/signin")

    }).catch((err)=>console.log(err.message))
    
  }
  return (
    <div className={style.container}>
       <div className={style.innerBox}>
        <h1>SignUp Page</h1>
        <Inputform label="Name: " type="text" placeholder="Enter Your Name"
        onChange={(e)=>setValue((prev)=>({...prev,name:e.target.value}))}/>
        <Inputform label="Email: " type="email" placeholder="Enter Your Email"
        onChange={(e)=>setValue((prev)=>({...prev,email:e.target.value}))}/>
        <Inputform label="Password: " type="password" placeholder="Enter Your Password"
        onChange={(e)=>setValue((prev)=>({...prev,password:e.target.value}))}/>
        <div className={style.footer}>
          <b>{errMsg}</b>
          <button className={style.btn} onClick={handleSubmission}>SignUp</button>
          <div className={style.linkContainer}>
            <p>Already have an account?</p>
            <span>
              <Link to="/signin">Signin</Link>
            </span>
          </div>
        </div>
       </div>
    </div>
  )
}
