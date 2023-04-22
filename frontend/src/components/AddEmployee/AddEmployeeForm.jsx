import React from 'react'
import axios from "axios";
import { useNavigate} from 'react-router-dom'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



function AddEmployeeForm  ()  {
    const navigate=useNavigate();
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[place,setPlace] = useState('')
    const[designation,setDesignation] = useState('')
    const[salary,setSalary] = useState('')


    const sendDataToApi =()=>{
        var token = sessionStorage.getItem("usertoken");
    const employeeData ={
        "token":token,
        "name":name,
        "email":email,
        "place":place,
        "designation":designation,
        "salary":salary
    }   
        axios.post(`http://localhost:3001/api/v1/employee/add`,employeeData)
        .then((response)=>{
            if (response.data.status==="success") {
                
                alert("Employee added successfully");
                navigate('/home');
            } else {
                alert("Error");
                navigate("/home")
            }
        })

}
  return (
    <div>
       <Navbar/>
       <div className="container">
        <div className="row g-3">
          

           
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <label htmlFor="" className="form-label">username</label>
                <input name='name' type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
              </div>
             
             

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <label htmlFor="" className="form-label">Email</label>
                <input name='email' type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
              </div>

              
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <label htmlFor="" className="form-label">place</label>
                <input name='place' type="text" className="form-control" onChange={(e)=>setPlace(e.target.value)} />
              </div>

              
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <label htmlFor="" className="form-label">Designation</label>
                <input name='designation' type="text" className="form-control" onChange={(e)=>setDesignation(e.target.value)} />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <label htmlFor="" className="form-label">Salary</label>
                <input name='salary' type="text" className="form-control" onChange={(e)=>setSalary(e.target.value)} />
              </div>
             
            

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <button type='submit' className="btn btn-danger" onClick={sendDataToApi}>Add Employee</button>
              </div>

              </div>
              </div>
<Footer/>
            </div>



        
  )
}

export default AddEmployeeForm