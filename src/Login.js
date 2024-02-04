function Login() {
    return (
        <div className="card p-4 test"  style={{ width: 400, margin: "auto" }}>
            <h1>Login</h1>
            <p>Please fill the below details to go to dashboard</p>
            <hr></hr>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" ></input>
                    </div>
                    <button style={{ display: 'block', margin: 'auto' }} className="btn btn-primary" type="submit">Login</button>
                </div>

            </form>
        </div>
    );
}

export default Login;