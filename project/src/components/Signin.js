import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sign.css";

function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signin", formData);
      alert(res.data.message);
      navigate("/landing"); // Navigate to the landing page on successful sign-in
    } catch (err) {
      alert(err.response?.data?.error || "An error occurred");
    }
  };

    return(
        <>
        <div className="page">
        <div className="container">
        <div className="signin-signup">
        <form className="signin-form" onSubmit={handleSubmit}>
                <h2 className="signin">sign in</h2>


                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text"  name="username" placeholder="Username"  onChange={handleChange}
              required></input>
                </div>

                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" name="password" placeholder="Password"  onChange={handleChange}
              required></input>
                </div>


                <p className="forgot-text">Forgot Password?</p>

                <input type="submit" value="Log in" className="animated-button"></input>

                <p className="switch-page">
                    Don't have an account?
                    <button 
                    type="button"
                    className="switch-link"
                    onClick={() =>navigate("/signup")}>Sign Up</button>
                </p>
            </form>
            </div>            
        </div>
        </div>
        </>
    )
}

export default Signin;