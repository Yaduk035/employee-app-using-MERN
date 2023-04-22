import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react';

function Navbar() {
    const navigate = useNavigate();
        const logout = () =>{
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('userId');
            navigate('/')

        };
  return (

    <div>
        <nav class="navbar">
            <div class="container-fluid">

                <button
                 class="navbar-toggler"
                 type="buton"
                 data-bs-toggle="collapse"
                 data-bs-target="#navbarNav"
                 aria-controls="navbarNav"
                 aria-expanded="false"
                 aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                 </button>
                 <div class="collapse navbar-collapse  nav1" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <Link to="/">
                <li class="nav-item">
                  <Button color="white" onClick={logout}>
                    {" "}
                    Logout
                  </Button>
                </li>
              </Link>
            </ul>
          </div>
         </div>
     </nav>
 </div>
  )
}

export default Navbar