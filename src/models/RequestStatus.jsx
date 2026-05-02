import { useState, useEffect } from "react";
import axios from "axios";
import "../css/requestStatus.css";
import { useNavigate } from "react-router-dom";

function RequestStatus() {
  const [requestStatus, setRequestStatus] = useState([]);
  const navigateTo = useNavigate();

  function handleLogout() {
    navigateTo("/");
  }

  useEffect(() => {
    axios
      .get("http://localhost:9000/requestStatus")
      .then((res) => {
        setRequestStatus(res.data);
      })
      .catch(() => {
        alert("Error fetching request status");
      });
  }, []);

  return (
    <div className="requestStatusWrapper">
      <div className="requestStatusHeading">
        <h2>Request Status</h2>
        <p>Track all your donor requests and current progress</p>
      </div>
      <button className="logoutbtnReq" onClick={handleLogout}>
        Log out
      </button>

      <div className="requestStatusCards">
        {requestStatus.map((item) => (
          <div className="statusCard" key={item._id}>
            <h3>{item.donorName}</h3>
            <p>Blood Group: {item.bloodGroup}</p>
            <p>City: {item.city}</p>
            <p>Status: {item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RequestStatus;