import React from 'react'
import '../styles/login.css'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <>
    <Header/>
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
            <p>Don't have an account? <a href="#" >Register</a></p>
          </div>
        </form>
      </div>
    </section>
    <button><Link to={"/adminpanel"}>Admin panel</Link></button>
    <button><Link to={"/cloud9cafehome"}>Cloud 9 Cafe</Link></button>
    <button><Link to={"/rooftoppoolbar"}>Rooftop poolbar</Link></button>
    <button><Link to={"/feast365resturenthome"}>Feast 365 Restaurent</Link></button>
    <button><Link to={"/coldkitchen"}>Cold Kitchen</Link></button>
    <button><Link to={"/hotkitchen"}>Hot Kitchen</Link></button>
    <button><Link to={"/mainbar"}>Main bar</Link></button>
    </>
  )
}

export default Login