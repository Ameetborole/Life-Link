import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./models/HomePage";
import Login from "./models/Login";
import SignUp from "./models/SignUp";
import BecomeDonor from "./models/BeomeDonor";
import FindDonor from "./models/FindDonor";
import DonorDashboard from "./models/DonorDashboard";
import ViewRequests from "./models/ViewRequests";
import EditProfile from "./models/EditProfile";
import RecieverDashboard from "./models/RecieverDashboard";
import SearchDonor from "./models/SearchDonor";
import EditRequest from "./models/EditRequest";
import RequestStatus from "./models/RequestStatus";
import "./css/App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/signup-page" element={<SignUp />} />
        <Route path="/become-donor" element={<BecomeDonor />} />
        <Route path="/find-donor" element={<FindDonor />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/View-Donation-Requests" element={<ViewRequests />} />
        <Route path="/profile-edit" element={<EditProfile />} />
        <Route path="/recieverDashboard" element={<RecieverDashboard />} />
        <Route path="/search-donor" element={<SearchDonor />} />
        <Route path="/edit-request" element={<EditRequest />} />
        <Route path="/requestStatus" element={<RequestStatus/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
