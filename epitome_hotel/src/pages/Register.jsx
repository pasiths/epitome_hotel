import "../styles/login.css";
import Header from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useState } from "react";

const Register = ({ inputs, title }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
        <div className="wrapper2">
          <form onSubmit={handleSubmit}>
            <h1>User</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
              />
              <i class="icon ri--2-fill"></i>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
              />
              <i class="icon ri--2-fill"></i>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={data.username}
                required
              />
              <i class="icon ri-user-2-fill"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
              />
              <i class="icon ri-mail-line"></i>
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
            <select
              name="role"
              id="role"
              className="input-box"
              onChange={handleChange}
              value={data.role}
              style={{
                border: "solid",
                borderRadius: 30,
                paddingLeft: 20,
                paddingRight: 40,
                borderColor: "#faa935",
                marginTop: 14,
                marginBottom: 14,
              }}
            >
              <option value="">Role</option>
              <option value="Admin">Admin</option>
              <option value="poolbarUser">Poolbar User</option>
              <option value="cloud9cafeUser">Cloud 9 cafe User</option>
              <option value="hotKitchenUser">Hot Kitchen User</option>
              <option value="coldKitchenUser">Cold Kitchen User</option>
              <option value="mainBarUser">Main Bar User</option>
            </select>

            {error && <div>{error}</div>}

            <button type="submit">Save</button>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <Link style={{ color: "black" }} to={"/Login"}>
                  Login
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
