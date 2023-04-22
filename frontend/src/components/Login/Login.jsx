import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const loginValidate = ()=>{
    const userData = {
      "email":email,
      "password":password
    }
    axios.post('http://localhost:3001/api/v1/user/login',userData)
    .then((getData)=>{
      console.log(getData.data)
      if (getData.data.status==="success") {
        sessionStorage.setItem("email",getData.data.data[0].email)
        sessionStorage.setItem("role",getData.data.data[0].role)
        sessionStorage.setItem("UserToken",getData.data.token)

        alert("login Success")
        navigate('/home')
      }
    })
  }

  return (
    <div>

       
<div className="container">
  <form >
      <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">email</label>
        <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">password</label>
        <input type="password" required className="form-control" onChange={(e)=>setPassword(e.target.value)}/>

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button type='button' className="btn btn-danger" onClick={loginValidate} >LOGIN</button>
          <p>don't have an account?</p>  <a href="/signup">Signup</a>
        </div>
      </div>
      </form>
     </div>   
    </div>
  )
}

export default Login