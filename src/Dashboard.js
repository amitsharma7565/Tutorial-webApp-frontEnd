
import './dashboard.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logout from './Logout';
function Dashboard(){
    
    const navigate=useNavigate();

    const handleLogoutClick=()=>{
        navigate('/Login')
    }

    const handleSchoolStudentClick=()=>{
        window.location.href = 'https://youtu.be/MCzptRuL6fE?si=UgB-8pgHyTIzp8O6'
    }

    const handleCollegeStudentClick=()=>{
        window.location.href ='https://youtu.be/vBYTj3eRbDI?si=9_3NAw4yigmAASTB'
    }   


    const handleWorkingProfessionalClick=()=>{
        window.location.href='https://youtu.be/sKBsCpC-N0E?si=MC1fxyeMr0ivN-WA'
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
              <p >School Stundent <a href='#' onClick={handleSchoolStudentClick}>Click here</a></p>  
            </div>
            <div class= 'box'>
              <p>College Student <a href='#' onClick={handleCollegeStudentClick}>Click Here</a></p>
            </div>
            <div class= 'box'>
                <p>Working professional<a href='#' onClick={handleWorkingProfessionalClick}>Click Here</a></p>
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