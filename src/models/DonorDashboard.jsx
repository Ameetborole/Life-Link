import "../css/donorDashboard.css";
import {useNavigate} from "react-router-dom";
function DonorDashboard() {
  const navigateTo=useNavigate();

  function handleEditProfile(){
    navigateTo("/profile-edit")
  }

  function handleLogout(){
    navigateTo("/")
  }
  function handleViewRequests(){
    navigateTo("/View-Donation-Requests")
  }
  return (
    <div className="dashboardWrapper">

      <div className="dashboardHeading">
        <h2>Donor Dashboard</h2>
        <p>Welcome back! Track your donation status and recipient connections here.</p>
      </div>

      <div className="dashboardCards">

        <div className="card">
          <h3>Profile Status</h3>
          <p>Verified</p>
        </div>

        <div className="card">
          <h3>Availability</h3>
          <p>Available Now</p>
        </div>

        <div className="card">
          <h3>Matched Recipients</h3>
          <p>3 Active Matches</p>
        </div>

        <div className="card">
          <h3>Hospital Verification</h3>
          <p>Pending Review</p>
        </div>

      </div>

      <div className="recentUpdates">
        <h3>Recent Updates</h3>

        <ul>
          <li>New recipient request received</li>
          <li>Hospital requested additional reports</li>
          <li>Your donor profile was viewed 12 times</li>
        </ul>
      </div>

      <div className="actionSection">
        <button className="editBtn1" onClick={handleEditProfile}>Edit Profile</button>
        <button className="contactBtn" onClick={handleViewRequests}>View Requests</button>
        <button className="logoutbtn" onClick={handleLogout}>Log out</button>
      </div>

    </div>
  );
}

export default DonorDashboard;