function Register(){
    return(
        <form>      
        <div>
           <h1>Register</h1>
           <p>Please fill the below details to create an account</p>
           <hr/>
           <label for="email" >Email</label>
           <input type="text" placeholder="Enter Email" name="email" id="email"/><br/> <br/> 
           <label for ="psw">Password</label> 
           <input type="password" placeholder="Enter password" name="psw" id="psw"/><br/> <br/> 
           <label for ="rPsw" >Repeat Password</label>
           <input type="password" placeholder="Repeat password" name="rPsw" id="rPsw"/> <br/><br/>
           <p>By creating an account you agree to our <a href="https://www.google.com">Terms & Privacy</a>. </p>
            <button type="submit" class="registerBtn" >Register</button>
        </div>
        </form>
    )
}

export default Register;