import "../css/editProfile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditProfile() {
  const [updatedInfo, setUpdatedInfo] = useState({
    fullname: "",
    city: "",
    mobilenumber: "",
    email: "",
    healthinfo: "",
    availability: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setUpdatedInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSaveChanges() {
    if (
      updatedInfo.fullname === "" ||
      updatedInfo.city === "" ||
      updatedInfo.mobilenumber === "" ||
      updatedInfo.email === "" ||
      updatedInfo.healthinfo === "" ||
      updatedInfo.availability === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    axios
      .put("http://localhost:9000/editProfile", updatedInfo)
      .then((res) => {
        alert(res.data);
      })
      .catch(() => {
        alert("Error while updating profile");
      });
  }

  function handleDeactivateProfile() {
    if (updatedInfo.email === "") {
      alert("Please enter email to deactivate profile");
      return;
    }

    axios
      .put("http://localhost:9000/deactivateProfile", {
        email: updatedInfo.email,
      })
      .then((res) => {
        alert(res.data);
        navigate("/login-page");
      })
      .catch(() => {
        alert("Error while deactivating profile");
      });
  }

  function handleBackToDashboard() {
    navigate("/donor-dashboard");
  }

  return (
    <div className="editProfileWrapper">
      <div className="editHeading">
        <h2>Edit Donor Profile</h2>
        <p>Update your donor details and availability status</p>

        <button
          className="backDashboardBtn"
          onClick={handleBackToDashboard}
        >
          Back to Dashboard
        </button>
      </div>

      <div className="editForm">
        <input
          type="text"
          placeholder="Full Name"
          name="fullname"
          value={updatedInfo.fullname}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="City"
          name="city"
          value={updatedInfo.city}
          onChange={handleChange}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          name="mobilenumber"
          value={updatedInfo.mobilenumber}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={updatedInfo.email}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Health Information"
          name="healthinfo"
          value={updatedInfo.healthinfo}
          onChange={handleChange}
        />

        <select
          name="availability"
          className="availability"
          value={updatedInfo.availability}
          onChange={handleChange}
        >
          <option value="">Availability Status</option>
          <option value="Available Now">Available Now</option>
          <option value="Not Available">Not Available</option>
          <option value="Later">Later</option>
        </select>

        <div className="editButtons">
          <button
            className="saveBtn"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>

          <button
            className="deactivateBtn"
            onClick={handleDeactivateProfile}
          >
            Deactivate Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;