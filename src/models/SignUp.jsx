import { useState } from "react";
import "../css/signup.css";
import axios from "axios";
function SignUp() {
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    RegistrationType: "",
  });
  console.log(signupData);
  function handleChange(e) {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSignUp(e) {
    e.preventDefault();
    if (
      signupData.firstname === "" ||
      signupData.lastname === "" ||
      signupData.email === "" ||
      signupData.password === "" ||
      signupData.RegistrationType === ""
    ) {
      alert("Please fill all fields");
    }
    
    axios
      .post("http://localhost:9000/signup", signupData)
      .then((res) => {
        alert(res.data);

        setSignupData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          RegistrationType: "",          
        });
      })
      .catch(() => {
        alert("Error while signing up");
        return;
      });
  }

  return (
    <div>
      <h3 className="hero">U are a Hero for saving a Life</h3>
      <h5 className="save">Signup to save lifes.....</h5>
      <form className="mainWrapper">
        <div className="FormWrapper">
          <input
            type="text"
            className="firstname"
            placeholder="First Name"
            name="firstname"
            onChange={handleChange}
            value={signupData.firstname}
          />
          <input
            type="text"
            className="lastname"
            placeholder="Last Name"
            name="lastname"
            onChange={handleChange}
            value={signupData.lastname}
          />
          <input
            type="email"
            className="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={signupData.email}
          />

          <input
            type="password"
            className="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={signupData.password}
          />
          <select
            name="RegistrationType"
            id="options"
            className="registration"
            onChange={handleChange}
            value={signupData.RegistrationType}
          >
            <option value="">Select Type</option>
            <option value="Donor">Donor</option>
            <option value="Recipient">Recipient</option>
          </select>
          <button className="RegisterBtn" onClick={handleSignUp} type="button">
            Register
          </button>
          <p className="backTOLogin">
            U have already registered?
            <a href="/login-page">
              <span className="regLogin">Login</span>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
