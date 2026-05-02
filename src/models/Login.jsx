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
      console.log("Login Response:", res.data);
      console.log("error here no data sent to db");

      if (res.data.loginFlag === "Authorized") {

        if (res.data.role === "Donor") {
          alert("Logged in as Donor");
          navigateTo("/donor-dashboard");
        }

        else if (res.data.role === "Recipient") {
          alert("Logged in as Recipient");
          navigateTo("/recieverDashboard");
        }

        else {
          console.log("⚠️ Role is undefined or incorrect:", res.data.role);
          alert("Role issue. Check backend data.");
        }
      }

      else if (res.data.loginFlag === "Unauthorized") {
        alert("Invalid user credentials.");
      }

      else {
        console.log("⚠️ Unexpected response:", res.data);
      }
    })
    .catch((err) => {
      console.log("❌ Axios error:", err);
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