import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ⬅️ Add this

function Login() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:7104/api/Users ', {
        email,
        password
      });

      if (response.status === 200) {
        setMessage('Login successful!');
        // Optionally save token or redirect
        // localStorage.setItem("token", response.data.token);
        // window.location.href = "/dashboard";
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleLogin}>
              <div className="mb-4 text-center">
                <p className="lead fw-normal mb-0">Sign in with</p>
                <button type="button" className="btn btn-primary mx-1"><i className="fab fa-facebook-f"></i></button>
                <button type="button" className="btn btn-primary mx-1"><i className="fab fa-twitter"></i></button>
                <button type="button" className="btn btn-primary mx-1"><i className="fab fa-linkedin-in"></i></button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold w-100">Or</p>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter a valid email address"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="remember" />
                  <label className="form-check-label" htmlFor="remember">Remember me</label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
              </div>

              {message && (
                <div className="alert alert-info text-center" role="alert">
                  {message}
                </div>
              )}

              <div className="text-center">
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <a
        className="btn btn-link text-danger"
        onClick={() => navigate('/Registration')}
      >
        Register
      </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="text-white text-center text-lg-start bg-primary mt-5">
        <div className="d-flex justify-content-between p-3 px-5">
          <div>© 2020. All rights reserved.</div>
          <div>
            <a href="#!" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#!" className="text-white me-4"><i className="fab fa-twitter"></i></a>
            <a href="#!" className="text-white me-4"><i className="fab fa-google"></i></a>
            <a href="#!" className="text-white"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Login;
