import "../css/login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigateTo = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  }

function handleLogin() {
  axios.post("http://localhost:9000/login", loginData)
    .then((res) => {
      console.log("Login Response:",res.data)
      if (
        res.data.role === "Donor" &&
        res.data.loginFlag === "Authorized"
      ) {
        alert("Logged in as Donor");
        navigateTo("/donor-dashboard");
      }

      else if (
        res.data.role === "Recipient" &&
        res.data.loginFlag === "Authorized"
      ) {
        alert("Logged in as Recipient");
        navigateTo("/recieverDashboard");
      }

      else if (
        res.data.loginFlag === "Unauthorized"
      ) {
        alert("Invalid user credentials.");
      }

    })
    .catch(() => {
      alert("Error in logging in");
    });
}
  return (
    <div>
      <p className="life">Ready to save lifes...</p>
      <div className="Loginwrapper">
        <h3>Login</h3>
        <input
          type="email"
          className="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          required
        />
        <input
          type="password"
          className="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
          required
        />

        <button className="loginbtn" onClick={handleLogin}>
          Login
        </button>

        <p className="back">
          dont have account?
          <a href="/signup-page">
            <span className="up">signup</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
