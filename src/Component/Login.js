import React from 'react'
import img from "./Login_Asset/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg"
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa"

const Login = () => {
  return (
    <div className="login-section-container">
      <div className='login-image-container'>
        <img src={img} alt="" />
        <div className='wrapper-login'>
          <form action=''>
            <h1>Login</h1>
            <div className='input-box-login'>
              <div className='icon-login'><FaUser /></div>
              <input type="text" placeholder='Username' required />
            </div>
            <div className='input-box-login'>
              <input type="password" placeholder='Password' required />
              <div className='icon-login'><FaLock /></div>
            </div>
            <div className="remember-forgot-login">
              <label><input type="checkbox" />Remember Me</label>
              <a href="">Forgot password</a>
            </div>
            <button type='submit' className='button-login'>Login</button>
            <div className="register-link-login">
              <p>Don't have account? <a href="">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login