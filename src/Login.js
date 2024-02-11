import { useNavigate } from "react-router-dom";

function Login() {
    const navigate= useNavigate();
const handleRegisteSubmit=()=>{
    navigate('/register');
}
    const handleSubmit = async(e)=>{
        e.preventDefault();
      const fromData={
        email:e.target.email.value,
        password:e.target.password.value
      };
      try{
        const response= await fetch('http://localhost:8080/login/user',{
            method:'Post',
          headers:  {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(fromData),
        });
        if(response.ok){
            navigate('/Dashborad')
            console.log('login sucessfully')
        }
        else{
            console.log('Please try again')
        }
      }
      catch(error){
        console.log('Error :',error);
      }
    }
    return (
        <div className="card p-4 test"  style={{ width: 400, margin: "auto" }}>
            <h1>Login</h1>
            <p>Please fill the below details to go to dashboard</p>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" ></input>
                    </div>
                    <div style={{display:"flex", justifyContent: "space-between"}}>
                    <button style={{ display: 'block', margin: 'auto' }} className="btn btn-primary" type="submit">Login</button>
                    <button onClick={handleRegisteSubmit}  style={{ display: 'block', margin: 'auto' }} className="btn btn-primary" type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;