import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Update()  {
    const navigate = useNavigate();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [place,setPlace] = useState('')
    const [designation,setDesignation] = useState('')
    const [salary,setSalary] = useState('')
    const [ID,setID] = useState(null)

    const sendDataToApi = ()=>{
        const employeeData={
            "name":name,
            "email":email,
            "place":place,
            "designation":designation,
            "salary":salary
        }
        axios.put(`http://localhost:3001/api/v1/employee/${ID}`,employeeData)
        .then((response)=>{
            if (response.data.success===true) {
                alert("Updated successfully");
                navigate('/home');
            } else {
                alert("Update Failed");
            }
        })
    }

        useEffect(()=>{
            setName(localStorage.getItem("name"));
            setEmail(localStorage.getItem("email"));
            setPlace(localStorage.getItem("place"));
            setDesignation(localStorage.getItem("designation"));
            setSalary(localStorage.getItem("salary"));
            setID(localStorage.getItem('ID'));
        },[])
  return (
    <div>
        <Navbar/>


        <div className="container">
        <div className="row g-3">
          
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    
        </div>    
    
           
              
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" name={name} onChange={(e)=>setName(e.target.value)}/>
              </div>
             
             
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" className="form-control" name={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <label htmlFor="" className="form-label">Place</label>
                <input type="text" className="form-control" name={place} onChange={(e)=>setPlace(e.target.value)}/>
              </div>

              
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <label htmlFor="" className="form-label">Designation</label>
                <input type="text" className="form-control" name={designation} onChange={(e)=>setDesignation(e.target.value)}/>
              </div>

              
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <label htmlFor="" className="form-label">Salary</label>
                <input type="text" className="form-control" name={salary} onChange={(e)=>setSalary(e.target.value)}/>
              </div>  
              


              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <button type='submit' className="btn btn-danger" onClick={sendDataToApi}>Update</button>
               
              </div>

              
              </div>
              

            </div>
            <Footer/>
    </div>
  )
}

export default Update