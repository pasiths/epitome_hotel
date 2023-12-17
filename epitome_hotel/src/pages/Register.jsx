import React from "react";

import "../styles/login.css";



const Register = () => {
  return (
    <section className="login">
    <div className="wrapper2">
      <form action="">
        <h1 className="h-title">Register</h1>

        <div className="input-box">
          <input type="fname" name="" id="" placeholder='First Name' required/>
          <i class="icon ri--2-fill"></i>
        </div>
        <div className="input-box">
          <input type="lname" name="" id="" placeholder='Last Name' required/>
          <i class="icon ri--2-fill"></i>
        </div>        <div className="input-box">
          <input type="text" name="" id="" placeholder='Username' required/>
          <i class="icon ri-user-2-fill"></i>
        </div>
        <div className="input-box">
          <input type="password" name="" id="" placeholder='Password' required/>
          <i class="icon ri-lock-2-fill"></i>
        </div>
          <div className="input-box">
          <input type="password" name="" id="" placeholder='Conform Password' required/>
          <i class="icon ri-lock-2-fill"></i>
        </div>

          <div className="input-box">
          <input type="text" name="" id="" placeholder='Role' required/>
          <i class="icon ri-user-2-fill"></i>
          </div>
          <div className="input-box">
          <input type="text" name="" id="" placeholder='Location' required/>
          <i class="icon ri--2-fill"></i>
          </div>

        
        <button type='submit'>Register</button>

        <div className="register-link">
          <p>Already have an account? <a href="#">Log In</a></p>
        </div>
      </form>
    </div>
  </section>
  );
};

export default Register;
