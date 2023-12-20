import React from 'react'
import '../styles/login.css'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

const Login = () => {

  return (
    <>
      <Header />
      <section className="login">
        <div className="wrapper">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" name="" id="" placeholder='Username' required />
              <i class="icon ri-user-2-fill"></i>
            </div>
            <div className="input-box">
              <input type="password" name="" id="" placeholder='Password' required />
              <i class="icon ri-lock-2-fill"></i>
            </div>

            <div className="remember-forgot">
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Remember me
              </label>
              <a href="#">Forget Password</a>
            </div>

            <button type='submit' style={{color:'white'}}>Login</button>

            <div className="register-link">
              <p>Don't have an account? <a href="#" >Register</a></p>
            </div>
          </form>
        </div>
      </section>
      <Container>
      <center>
        <div className='wrapper'>
          <button type='submit' style={{marginBottom:8}}><Link to={"/adminpanel"} style={{color:'white'}}>Admin panel</Link></button>
          <button type='submit' style={{marginBottom:8}}><Link to={"/cloud9cafehome"} style={{color:'white'}}>Cloud 9 Cafe</Link></button>
          <button type='submit' style={{marginBottom:8}}><Link to={"/rooftoppoolbarhome"} style={{color:'white'}}>Rooftop poolbar</Link></button>
          <button type='submit' style={{marginBottom:8}}><Link to={"/feast365resturenthome"} style={{color:'white'}}>Feast 365 Restaurent</Link></button>
          <button type='submit' style={{marginBottom:8}}><Link to={"/coldkitchen"} style={{color:'white'}}>Cold Kitchen</Link></button>
          <button type='submit' style={{marginBottom:8}}><Link to={"/hotkitchen"} style={{color:'white'}}>Hot Kitchen</Link></button>
          <button type='submit' style={{marginBottom:8}}><Link to={"/mainbar"} style={{color:'white'}}>Main bar</Link></button>
          
        </div>
        </center>
      </Container>
    </>
  )
}

export default Login