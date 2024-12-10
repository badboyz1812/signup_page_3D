import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sign.css";

function Signup() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", formData);
      alert(res.data.message);
      navigate("/signin"); // Navigate to Sign-in page on successful signup
    } catch (err) {
      alert(err.response?.data?.error || "An error occurred");
    }
  };

    return(
        <>
        <div className="page">
            <div className="container">
            <form action="" className="signup-form" id="signup-form" onSubmit={handleSubmit}>
                <h2 className="signup">Sign Up</h2>

                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" name= "username" placeholder="Username"  onChange={handleChange}
              required></input>
                </div>

                <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="text" name="email" placeholder="Email"  onChange={handleChange}
              required></input>
                </div>

                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" name="password" placeholder="Password"  onChange={handleChange}
              required></input>
                </div>

                <input type="submit" value="sign up"  className="animated-button"></input>


                <p className="switch-page">
                    Already have an account?
                    <button 
                    type="button"
                    className="switch-link"
                    onClick={()=>navigate("/sigin")}>Sign In</button>
                </p>
            </form>
        </div>
        </div>
        </>
    )
}

export default Signup;