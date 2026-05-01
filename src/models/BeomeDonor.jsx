import { useState } from "react";
import "../css/becomeDonor.css";
import axios from "axios";

function BecomeDonor() {
  const [donorData, setDonorData] = useState({
    fullname: "",
    age: "",
    bloodgroup: "",
    city: "",
    mobilenumber: "",
    email: "",
    Healthinfo: "",
    availability: "",
    checkbox:true
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setDonorData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      donorData.fullname === "" ||
      donorData.age === "" ||
      donorData.bloodgroup === "" ||
      donorData.city === "" ||
      donorData.mobilenumber === "" ||
      donorData.email === "" ||
      donorData.Healthinfo === "" ||
      donorData.availability === "" ||
      !donorData.checkbox
    ) {
      alert("Please fill all fields.");
      return;
    }
    axios
      .post("http://localhost:9000/Donorinfo", donorData)
      .then((res) => {
        alert(res.data);
        setDonorData({
          fullname: "",
          age: "",
          bloodgroup: "",
          city: "",
          mobilenumber: "",
          email: "",
          Healthinfo: "",
          availability: "",
          checkbox: false
        });
      })
      .catch(() => {
        alert("Error in submiting Form");
      });
  }
  return (
    <div>
      <div className="DonorFormHeading">
        <h3>Donor Form</h3>
        <p>A big step towards giving new life to someone needy</p>
      </div>
      <div className="DonorWrapper">
        <input
          type="text"
          className="fullname"
          placeholder="Full Name"
          name="fullname"
          onChange={handleChange}
          value={donorData.fullname}
        />
        <input
          type="number"
          className="age"
          placeholder="Your Age"
          name="age"
          onChange={handleChange}
          min={18}
          max={80}
          value={donorData.age}
        />
        <input
          type="text"
          className="bloodGroup"
          placeholder="Blood Group"
          name="bloodgroup"
          onChange={handleChange}
          value={donorData.bloodgroup}
        />
        <input
          type="text"
          className="city"
          placeholder="City"
          name="city"
          onChange={handleChange}
          value={donorData.city}
        />
        <input
          type="tel"
          className="contact"
          placeholder="Mobile Number"
          name="mobilenumber"
          onChange={handleChange}
          value={donorData.mobilenumber}
        />
        <input
          type="email"
          className="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={donorData.email}
        />
        <input
          type="text"
          className="Healthinfo"
          placeholder="Health Info"
          name="Healthinfo"
          onChange={handleChange}
          value={donorData.Healthinfo}
        />
        <select
          name="availability"
          className="availability"
          onChange={handleChange}
          value={donorData.availability}
        >
          <option value="">Availability To Donate</option>
          <option value="Urgent">Urgent</option>
          <option value="Later">Later</option>
          <option value="NotSure">Not Sure</option>
        </select>
        <div className="term">
          <input
            type="checkbox"
            onChange={handleChange}
            name="checkbox"
            className="checkbox"
            required
          />
          <label>I confirm that the information provided is true.</label>
        </div>
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default BecomeDonor;
