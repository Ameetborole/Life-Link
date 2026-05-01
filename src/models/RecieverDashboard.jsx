import { useState } from "react";
import "../css/receiverDashboard.css";
import {useNavigate} from "react-router-dom";
function ReceiverDashboard() {
  const [receiverData] = useState({
    fullname: "",
    profileStatus: "",
    requestStatus: "",
    matchedDonors: "",
    hospitalVerification: "",
  });
   const navigateTo=useNavigate();

   function handleClickDonor(){
     navigateTo("/search-donor")
   } 

   function handleClickRequest(){
    navigateTo("/edit-request")
   }

   function handleRequestStatus(){
    navigateTo("/requestStatus")
   }
  return (
    <div className="receiverDashboardWrapper">

      <div className="receiverHeading">
        <h2 className="DashboardH2">Receiver Dashboard</h2>
        <p>Track your donor requests and medical verification status</p>
      </div>

      <div className="receiverCards">

        <div className="receiverCard">
          <h3>Profile Status</h3>
          <p>{receiverData.profileStatus}</p>
        </div>

        <div className="receiverCard">
          <h3>Request Status</h3>
          <p>{receiverData.requestStatus}</p>
        </div>

        <div className="receiverCard">
          <h3>Matched Donors</h3>
          <p>{receiverData.matchedDonors}</p>
        </div>

        <div className="receiverCard">
          <h3>Hospital Verification</h3>
          <p>{receiverData.hospitalVerification}</p>
        </div>

      </div>

      <div className="recentUpdates">
        <h3>Recent Updates</h3>

        <ul>
          <li>New donor match found</li>
          <li>Hospital requested medical report</li>
          <li>Your profile verification is under review</li>
        </ul>
      </div>

      <div className="receiverActions">
        <button className="searchBtn2" onClick={handleClickDonor}>Search Donor</button>
        <button className="editBtn2" onClick={handleClickRequest}>Edit Request</button>
        <button className="requsetStatusBtn" onClick={handleRequestStatus}>Request Status</button>
      </div>

    </div>
  );
}

export default ReceiverDashboard;