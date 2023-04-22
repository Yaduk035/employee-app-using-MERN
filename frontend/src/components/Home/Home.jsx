import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Home ()  {
    const [apiData, setApiData]= useState([]);
    const [visible,setVisible] = useState(true);
    useEffect(()=>{
        let role = sessionStorage.getItem("role");
        if(role ==='user')
        {
            setVisible(false)
        }
        else{
            setVisible(true)
        }
        axios.get(`http://localhost:3001/api/v1/employees`)
        .then((getData)=>{
            setApiData(getData.data)
        })
    },[]);

    const getData = () =>{
        axios.get(`http://localhost:3001/api/v1/employees`)
        .then((getData) =>{
            setApiData(getData.data)
            console.log(getData.data)
        })
    };


    const onDelete = (id) =>{
        axios.delete(`http://localhost:3001/api/v1/employee/${id}`)
        .then((response)=>{
            if (response.data.success===true) {
                alert("Employee deleted successfully")
                getData()
                
            } else {
                alert("Something went wrong");
            }
        })
    }

    const setData=(id,name,email,place,designation,salary)=>{
        localStorage.setItem("ID",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("place",place);
        localStorage.setItem("designation",designation);
        localStorage.setItem("salary",salary);
    }

  return (
    <div>
        
        <Navbar/>
        <div className="container">
        <div className="row-g-3 mt-5">
        <table className="table p-3 text-info-emphasis bg-primary-subtle border border-info-subtle rounded-3 ">
  <thead>
    <tr>

      <th scope="col " className=''>NAME</th>
      <th scope="col" className=''>EMAIL</th>
      <th scope="col" className=''>PLACE</th>
      <th scope="col" className=''>DESIGNATION</th>
      <th scope="col" className=''>SALARY</th>
      {visible && <th scope='col' className=''>Update</th>}
      {visible && <th scope='col' className=''>Update</th>}
    </tr>
  </thead>
  <tbody>
    {Array.isArray(apiData)
    ?apiData.map((data)=>{
      return(
        <tr>

      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.place}</td>
      <td>{data.designation}</td>
      <td>{data.salary}</td>
      {
        visible &&
        <td>
          <Link to='updateEmp'>
            <Button color='green' onClick={()=>setData(data._id,data.name,data.email,data.place,data.designation,data.salary)}>Update</Button>
          </Link>
        </td>
      }
      {
        visible && 
        <td>
        <Button color='red' onClick={()=>onDelete(data.id)}>Delete</Button>
        </td>
      }

    </tr>
      )
    }):null}
  </tbody>
</table>
    <Link to={"/addEmp"}>
      {visible &&<Button className='btn btn-secondary btn-lg'>Add Employee</Button>}
    </Link>
        </div>
      </div>







        <Footer/>
    </div>
  )
}

export default Home