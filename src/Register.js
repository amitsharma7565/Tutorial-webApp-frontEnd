import './Register.css';

function Register() {

    return (
       
            <div className="card p-4 test" style={{width: 400, margin: "auto"}}>
                <h1>Register</h1>
                <p>Please fill the below details to create an account</p>
                <hr />
                <form>
                <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Password</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Repeat Password</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
                {/* <label for="psw">Password</label>
                <input type="password" placeholder="Enter password" name="psw" id="psw" /><br /> <br />
                <label for="rPsw" >Repeat Password</label>
                <input type="password" placeholder="Repeat password" name="rPsw" id="rPsw" /> <br /><br /> */}
                <p>By creating an account you agree to our <a href="https://www.google.com">Terms & Privacy</a>. </p>
                <button type="submit" className="btn btn-primary registerBtn" >Register</button>
                </form>

            </div>
        
    )
}

export default Register;