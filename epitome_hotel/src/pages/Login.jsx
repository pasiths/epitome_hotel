import React from 'react'
import '../styles/login.css'

const Login = () => {
  return (
    <section className="login">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" name="" id="" placeholder='Username' required/>
            <i class="icon ri-user-2-fill"></i>
          </div>
          <div className="input-box">
            <input type="password" name="" id="" placeholder='Password' required/>
            <i class="icon ri-lock-2-fill"></i>
          </div>

          <div className="remember-forgot">
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Remember me
            </label>
            <a href="#">Forget Password</a>
          </div>
          
          <button type='submit'>Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login