import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

 

  const handleDataChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate()
  const handleData = (event) => {
    event.preventDefault();
    console.log(formData);
    if (formData.username==='arloo' && formData.password==='arloo') {
      navigate('/dashboard')
    }

  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <header>Login</header>
        <form action="/" onSubmit={handleData} id="">
          <div className="form-first">
            <div className="details personal">
              <div className="fields">
                <div className="login-input-field">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    name="username"
                    value={formData.username}
                    onChange={handleDataChange}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleDataChange}
                  />

                  <div className="button">
                    <input type="submit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
