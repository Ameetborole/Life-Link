import { useState } from "react";
import "../css/findDonor.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function FindDonor() {
  const [recipientData, setRecipientData] = useState({
    fullname: "",
    age: "",
    bloodgroup: "",
    requiredBloodGroup: "",
    city: "",
    mobilenumber: "",
    email: "",
    hospitalName: "",
    urgencyLevel: "",
    healthSummary: "",
    checkbox:false
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setRecipientData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  const navigate=useNavigate();
  function handleLogin() {
    navigate("/login-page");
  }

  function handleSignUp() {
    navigate("/signup-page");
  }

  function handleHome(){
    navigate("/")
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      recipientData.fullname === "" ||
      recipientData.age === "" ||
      recipientData.bloodgroup === "" ||
      recipientData.requiredBloodGroup === "" ||
      recipientData.city === "" ||
      recipientData.mobilenumber === "" ||
      recipientData.email === "" ||
      recipientData.hospitalName === "" ||
      recipientData.urgencyLevel === "" ||
      recipientData.healthSummary === "" ||
      !recipientData.checkbox
    ) {
      alert("Please fill all feilds");
      return;
    }
    axios
      .post("http://localhost:9000/findDonor",recipientData)
      .then((res) => {
        alert(res.data);
        setRecipientData({
          fullname: "",
          age: "",
          bloodgroup: "",
          requiredBloodGroup: "",
          city: "",
          mobilenumber: "",
          email: "",
          hospitalName: "",
          urgencyLevel: "",
          healthSummary: "",
          checkbox: ""
        });
      })
      .catch(() => {
        alert("error in form submition");
        return;
      });
  }
  return (
    <div>
        <div className="wrapper1">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <h2>Life Link</h2>
          </div>

          <div className="navButtons">
            <button className="homebtn" onClick={handleHome}>Home</button>
            <button className="loginBtn" onClick={handleLogin}>
              Login
            </button>
            <button className="signupBtn" onClick={handleSignUp}>
              Sign Up
            </button>
        </div>
      </nav>
      </div>

      <div className="FindDonorHeading">
        <h3>Find a Donor</h3>
        <p>Connect with verified kidney donors and get support faster</p>
      </div>

      <div className="FindDonorWrapper">
        <input
          type="text"
          placeholder="Full Name"
          name="fullname"
          onChange={handleChange}
          value={recipientData.fullname}
        />

        <input
          type="number"
          placeholder="Your Age"
          name="age"
          onChange={handleChange}
          min={1}
          value={recipientData.age}
        />

        <input
          type="text"
          placeholder="Your Blood Group"
          name="bloodgroup"
          onChange={handleChange}
          value={recipientData.bloodgroup}
        />

        <input
          type="text"
          placeholder="Required Donor Blood Group"
          name="requiredBloodGroup"
          onChange={handleChange}
          value={recipientData.requiredBloodGroup}
        />

        <input
          type="text"
          placeholder="City"
          name="city"
          onChange={handleChange}
          value={recipientData.city}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          name="mobilenumber"
          onChange={handleChange}
          value={recipientData.mobilenumber}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={recipientData.email}
        />

        <input
          type="text"
          placeholder="Doctor / Hospital Name"
          name="hospitalName"
          onChange={handleChange}
          value={recipientData.hospitalName}
        />

        <select
          name="urgencyLevel"
          className="urgency"
          onChange={handleChange}
          value={recipientData.urgencyLevel}
        >
          <option value="">Urgency Level</option>
          <option value="Emergency">Emergency</option>
          <option value="Within 1 Month">Within 1 Month</option>
          <option value="Flexible">Flexible</option>
        </select>

        <input
          type="text"
          placeholder="Short Health Summary"
          name="healthSummary"
          onChange={handleChange}
          value={recipientData.healthSummary}
        />

        <div className="term">
          <input
            type="checkbox"
            name="checkbox"
            className="checkbox"
            onChange={handleChange}
            value={recipientData.checkbox}
          />
          <label>I confirm that the information provided is true</label>
        </div>
        <button className="submit" onClick={handleSubmit}>
          Submit Request
        </button>
      </div>
    </div>
  );
}

export default FindDonor;
