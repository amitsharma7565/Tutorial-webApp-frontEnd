
import './dashboard.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logout from './Logout';
function Dashboard(){
    
    const navigate=useNavigate();

    const handleLogoutClick=()=>{
        navigate('/Login')
    }

    return(
        <div class ='edit' >
            <h1> Welcome to dashboard page</h1>
            <p> 
                Take a online courses from the world best online eduction-HUB 
            </p>

            <button onClick={handleLogoutClick}>Logout</button>
            <div class= 'container'>
            <div class= 'box'>
              <p >School Stundent<a href=''>Click here </a></p>  
            </div>
            <div class= 'box'>
              <p>College Student <a href=''>Click Here</a></p>
            </div>
            <div class= 'box'>
                <p>Working professional<a href=''>Click Here</a></p>
            </div>
            </div>
            <div class="footerPart">
            <p>Top companies choose this online eduction hub to build in-demand career skills.</p>
            <text>
            © 2024 Eduction, Inc.
            </text>
            <th>
                <tr>
                    Term & Condition     
                </tr>
                <tr>
                    Get a app     
                </tr>
                <tr>
                    Contact us   
                </tr>
            </th>
            </div>

        </div>
    )
}

export default Dashboard;