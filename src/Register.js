

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Navbar from "./Navbar"; 
import Footer from "./Footer";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://urbanplaybackendserver.onrender.com/register", {
        username: userName,
        password: password,
      });
      console.log(response.data);
      alert("User registered successfully!");
      navigate("/"); // Redirect to login page after successful registration
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Registration failed!");
    }
  };

  return (
    <div className="register-wrapper">
       
    <div className="container-register">
      <h3 className="register-head">Register</h3>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="input-field"
        />  <br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           className="input-field"
        /> <br/>
        <button type="submit" className="register-button">Register</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
    </div>
  
  
  );
}

export default Register;
