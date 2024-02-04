import './Register.css';

function Register() {

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phoneNo: e.target.phoneNo.value,
    };
  
    try {
      const response = await fetch('http://localhost:8080/tutApp/create', {
        method: 'POST', // Corrected to uppercase 'POST'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Registration successful, you can handle it here
        console.log('Registration successful');
      } else {
        // Registration failed, handle the error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  




  return (

    <div className="card p-4 test" style={{ width: 400, margin: "auto" }}>
      <h1>Register</h1> <br></br>
      <p className="para">Please fill the below details to create an account</p>
      <hr />
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" />
        </div>



        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password"  className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNo"  className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNo"  />
        </div>

        <p>By creating an account you agree to our <a href="https://www.google.com">Terms & Privacy</a>. </p>

        <button style={{ display: 'block', margin: 'auto' }} className="btn btn-primary" type="submit">Register</button>

      </form>

    </div>

  )
}

export default Register;