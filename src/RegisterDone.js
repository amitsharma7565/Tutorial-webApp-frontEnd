import './Register.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function RegisterDone(){

    const navigate= useNavigate();

    const handleLoginClick=()=>{
        navigate('/Login');
        
    };

    return(
        <div className="done" >
            <h2>Your Registration is Done successful. Please login the account to go to dashboard </h2>
            <button onClick={handleLoginClick} className="btn btn-primary"  type='submit'>Login</button>
        </div>
    )
}
export default RegisterDone;