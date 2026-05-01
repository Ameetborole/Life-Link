import { useState } from "react";
import "../css/editRequest.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditRequest() {
  const [requestData, setRequestData] = useState({
    fullName: "",
    bloodGroup: "",
    city: "",
    hospitalName: "",
    medicalCondition: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setRequestData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const navigateTo = useNavigate();

  function navigateToDashboard() {
    navigateTo("/recieverDashboard");
  }

  function handleUpdateRequest() {
    if (
      requestData.fullName === "" ||
      requestData.bloodGroup === "" ||
      requestData.city === "" ||
      requestData.hospitalName === "" ||
      requestData.medicalCondition === "" ||
      requestData.email === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    axios
      .put("http://localhost:9000/editRequest", requestData)
      .then((res) => {
        alert(res.data);
      })
      .catch(() => {
        alert("Error while updating request");
      });
  }

  return (
    <div className="editRequestWrapper">
      <div className="editRequestHeading">
        <h2>Edit Request</h2>
        <p>Update your kidney donor request details</p>
      </div>

      <div className="editRequestForm">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={requestData.fullName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="bloodGroup"
          placeholder="Required Blood Group"
          value={requestData.bloodGroup}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={requestData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={requestData.city}
          onChange={handleChange}
        />

        <input
          type="text"
          name="hospitalName"
          placeholder="Hospital Name"
          value={requestData.hospitalName}
          onChange={handleChange}
        />

        <textarea
          name="medicalCondition"
          placeholder="Medical Condition / Additional Info"
          value={requestData.medicalCondition}
          onChange={handleChange}
        />

        <button className="updateRequestBtn" onClick={handleUpdateRequest}>
          Update Request
        </button>

        <button className="BackToDashboardBtn" onClick={navigateToDashboard}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default EditRequest;
