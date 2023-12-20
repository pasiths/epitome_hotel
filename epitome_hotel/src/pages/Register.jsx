import React from "react";

import "../styles/login.css";
import Header from "../components/Header/AdminHeader";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Header />
      <section className="login">
        <div className="wrapper2">
          <form action="">
            <h1>User</h1>
            <div className="input-box">
              <input
                type="fname"
                name=""
                id=""
                placeholder="First Name"
                required
              />
              <i class="icon ri--2-fill"></i>
            </div>
            <div className="input-box">
              <input
                type="lname"
                name=""
                id=""
                placeholder="Last Name"
                required
              />
              <i class="icon ri--2-fill"></i>
            </div>{" "}
            <div className="input-box">
              <input
                type="text"
                name=""
                id=""
                placeholder="Username"
                required
              />
              <i class="icon ri-user-2-fill"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                required
              />
              <i class="icon ri-lock-2-fill"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name=""
                id=""
                placeholder="Conform Password"
                required
              />
              <i class="icon ri-lock-2-fill"></i>
            </div>
            <select name="role" id="role" className="input-box" style={{ border:"solid" , borderRadius: 30, paddingLeft: 20, paddingRight: 40, borderColor: "#faa935" , marginTop:14 ,marginBottom:14 }}>
              <option value="">Role</option>
              <option value="Admin">Admin</option>
              <option value="poolbarUser">Poolbar User</option>
              <option value="cloud9cafeUser">Cloud 9 cafe User</option>
              <option value="MainRestaurent">Main Restaurent User</option>
              <option value="hotKitchenUser">Hot Kitchen User</option>
              <option value="coldKitchenUser">Cold Kitchen User</option>
              <option value="mainBarUser">Main Bar User</option>
            </select>

            <div className="input-box">
              <input
                type="text"
                name=""
                id=""
                placeholder="Location"
                required
              />
              <i class="icon ri--2-fill"></i>
            </div>
            <button type="submit">Save</button>
            <div className="register-link">
              <p>
                Already have an account? <Link style={{ color: "black" }} to={"/Login"}>Login</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
