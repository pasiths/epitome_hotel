import React, { useContext, useState } from "react";
import "../styles/login.css";
import Header from "../components/Header/Header";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      const role = res.role;
      console.log(role);
      if (role === "Admin" || role === "poolbarUser" || role === "cloud9cafeUser" || role === "hotKitchenUser" || role === "coldKitchenUser" || role === "mainBarUser") {
        if (role === "Admin") {
          window.location = "/admin";
        }
        if (role === "poolbarUser") {
          window.location = "/rooftoppoolbarhome";
        }
        if (role === "cloud9cafeUser") {
          window.location = "/cloud9cafeHome";
        }
        if (role === "hotKitchenUser") {
          window.location = "/hotkitchen";
        }
        if (role === "coldKitchenUser") {
          window.location = "/coldkitchen";
        }
        if (role === "mainBarUser") {
          window.location = "/mainbar";
        }
      } else {
        setError("Invalid username or Password");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Header />
      <section className="login">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChange}
                value={data.username}
                required
              />
              <i class="icon ri-user-2-fill"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
              />
              <i class="icon ri-lock-2-fill"></i>
            </div>

            <div className="remember-forgot">
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Remember me
              </label>
              <a href="#">Forget Password</a>
            </div>

            <button type="submit">
              Sing In
            </button>
            {error && <div style={{ color: "black" }}>{error}</div>}

            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <Link to={"/Register"} style={{ color: "black" }}>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
