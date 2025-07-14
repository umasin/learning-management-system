import React from 'react'
import './Login.css'
const Login = () => {
  return (
     <div className="container">
        <div className="login-box">
            <div className="left-side">
                <h2>Welcome Back</h2>
                <p>Please log in using your personal information to stay connected with us.</p>
            </div>
            <div className="right-side">
                <span className="close-btn">&times;</span>
                <h2>LOGIN</h2>
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <a href="#" className="forgot-password">Forgot password?</a>
                    <button type="submit">Log In</button>
                    <p>Don't have an account? <a href="#">Signup</a></p>
                </form>
            </div>
        </div>
    </div>
  )}
export default Login
