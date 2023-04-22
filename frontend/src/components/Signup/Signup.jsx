import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup ()  {
    const navigate = useNavigate();
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const sendDataToApi=()=>{
        const userData ={
            "userName":userName,
            "email":email,
            "password":password
        }
        axios.post(`http://localhost:3001/api/v1/user/register`,userData)
        .then((response)=>{
            if(response.data.success ===true){
                alert("SignUp Successfull Please login")
                navigate("/")
            }
        })
    }
  return (
    <div>

<div className="container">
        <div className="row g-3">
          

           
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <label htmlFor="" className="form-label">username</label>
                <input name='name' type="text" className="form-control" onChange={(e)=>setUserName(e.target.value)}/>
              </div>
             
             

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <label htmlFor="" className="form-label">Email</label>
                <input name='email' type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
              </div>
             
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <label htmlFor="" className="form-label">password</label>
                <input name='password' type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
              </div>


              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <button type='button' className="btn btn-danger" onClick={sendDataToApi}>REGISTER</button>
                <p>already have an account have an account?</p>  <a href="/">click Here</a>
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
 
                 <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              </div>

            </div>

    </div>
  )
}

export default Signup