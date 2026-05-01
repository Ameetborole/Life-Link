import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/viewRequests.css";

function ViewRequests() {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  // Fetch all recipient requests
  useEffect(() => {
    axios
      .get("http://localhost:9000/viewRequests")
      .then((res) => {
        setRequests(Array.isArray(res.data) ? res.data : []);
      })
      .catch(() => {
        alert("Error fetching requests");
      });
  }, []);

  // Accept request
  function handleAccept(id) {
    axios
      .put("http://localhost:9000/updateRequestStatus", {
        id: id,
        status: "Accepted",
      })
      .then((res) => {
        alert(res.data);

        setRequests((prev) =>
          prev.map((item) =>
            item._id === id
              ? { ...item, status: "Accepted" }
              : item
          )
        );
      })
      .catch(() => {
        alert("Error while accepting request");
      });
  }

  // Reject request
  function handleReject(id) {
    axios
      .put("http://localhost:9000/updateRequestStatus", {
        id: id,
        status: "Rejected",
      })
      .then((res) => {
        alert(res.data);

        setRequests((prev) =>
          prev.map((item) =>
            item._id === id
              ? { ...item, status: "Rejected" }
              : item
          )
        );
      })
      .catch(() => {
        alert("Error while rejecting request");
      });
  }

  // Back to donor dashboard
  function handleBackToDashboard() {
    navigate("/donor-dashboard");
  }

  return (
    <div className="viewRequestsWrapper">
      <div className="viewHeading">
        <h2>Recipient Requests</h2>
        <p>View and manage requests sent by recipients</p>

        <button
          className="backDashboardBtn"
          onClick={handleBackToDashboard}
        >
          Back to Dashboard
        </button>
      </div>

      <div className="requestCards">
        {requests.length > 0 ? (
          requests.map((item) => (
            <div className="requestCard" key={item._id}>
              <h3>{item.fullname}</h3>

              <p>
                <strong>Blood Group Needed:</strong>{" "}
                {item.requiredBloodGroup}
              </p>

              <p>
                <strong>City:</strong> {item.city}
              </p>

              <p>
                <strong>Urgency:</strong> {item.urgencyLevel}
              </p>

              <p>
                <strong>Hospital:</strong> {item.hospitalName}
              </p>

              <p>
                <strong>Status:</strong> {item.status || "Pending"}
              </p>

              <div className="requestButtons">
                <button
                  className="acceptBtn"
                  onClick={() => handleAccept(item._id)}
                >
                  Accept
                </button>

                <button
                  className="rejectBtn"
                  onClick={() => handleReject(item._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No recipient requests found</p>
        )}
      </div>
    </div>
  );
}

export default ViewRequests;