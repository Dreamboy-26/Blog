import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
const SignUp = () => {

const [userInfo,setUserInfo]=useState({
    name:"",
    userName:"",
    email:"",
    password:""
})
const navigate=useNavigate()

    const handleFormData=(e)=>{
        const name=e.target.name
        setUserInfo({...userInfo,[name]:e.target.value})


    }

const handleFormSubmit=async(e)=>{
    e.preventDefault()
console.log(userInfo)
 await axios.post("https://silly-wasp-fez.cyclic.app/signup",userInfo)
.then(()=>{
 
  navigate("/signin")
})



}
const handleSignin=()=>{
    
    navigate("/signin")
  }
  return (
    <div className='signupContainer'>
  <div >
        <form onSubmit={handleFormSubmit} className="form">
            <div>
                <input type="text" placeholder='Enter Name' name='name' onChange={(e)=>handleFormData(e)} />
            </div>
            <div>
                <input type="text" placeholder='Enter UserName' name='userName' onChange={(e)=>handleFormData(e)}/>
            </div>
            <div>
                <input type="text" placeholder='Enter Email' name='email' onChange={(e)=>handleFormData(e)} />
            </div>
            <div>
                <input type="text" placeholder='Enter Password' name='password' onChange={(e)=>handleFormData(e)}/>
            </div>
            <div>
                <input type="submit"  />
            </div>
        <p>already have an account <span onClick={handleSignin} color="blue">Singin</span></p>
        </form>
    </div>
    </div>
  
  )
}

export default SignUp