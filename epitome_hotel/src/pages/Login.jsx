import React, { useContext, useState } from "react";
import "../styles/login.css";
import Header from "../components/Header/Header";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      let role = null || "";
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      role = user.role;
      if (role === "admin") {
        navigate("/coldkitchen");
      } else {
        navigate("/cafe");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  console.log(user);
  return (
    <>
      <Header />
      <section className="login">
        <div className="wrapper">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                name=""
                id="username"
                placeholder="Username"
                onChange={handleChange}
                required
              />
              <i class="icon ri-user-2-fill"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name=""
                id="password"
                placeholder="Password"
                onChange={handleChange}
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

            <button type="submit" onClick={handleClick}>
              Login
            </button>
            {error && <span>{error.message}</span>}

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
      <button>
        <Link to={"/adminpanel"}>Admin panel</Link>
      </button>
      <button>
        <Link to={"/cloud9cafehome"}>Cloud 9 Cafe</Link>
      </button>
      <button>
        <Link to={"/rooftoppoolbar"}>Rooftop poolbar</Link>
      </button>
      <button>
        <Link to={"/feast365resturenthome"}>Feast 365 Restaurent</Link>
      </button>
      <button>
        <Link to={"/coldkitchen"}>Cold Kitchen</Link>
      </button>
      <button>
        <Link to={"/hotkitchen"}>Hot Kitchen</Link>
      </button>
      <button>
        <Link to={"/mainbar"}>Main bar</Link>
      </button>
    </>
  );
};

export default Login;