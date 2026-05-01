import { useState } from "react";
import "../css/searchDonor.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchDonor() {
  const [searchData, setSearchData] = useState({
    bloodgroup: "",
    city: "",
    availability: "",
  });

  const [donors, setDonors] = useState([]);
  const navigateTo = useNavigate();

  function navigateToDashboard() {
    navigateTo("/recieverDashboard");
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSearchDonor() {
    if (
      searchData.bloodgroup === "" ||
      searchData.city === "" ||
      searchData.availability === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post("http://localhost:9000/searchDonor", {
        bloodgroup: searchData.bloodgroup,
        city: searchData.city,
        availability: searchData.availability,
      })
      .then((res) => {
        setDonors(res.data);
      })
      .catch(() => {
        alert("Error while searching donor");
      });
  }
  
  function handleSendRequest(donor) {
    axios
      .post("http://localhost:9000/sendRequest", {
        donorName: donor.fullname,
        bloodGroup: donor.bloodgroup,
        city: donor.city,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch(() => {
        alert("Error sending request");
      });
  }
  return (
    <div className="searchDonorWrapper">
      {/* Heading */}
      <div className="searchHeading">
        <h2>Search Donor</h2>
        <p>Find matching kidney donors based on your requirements</p>
      </div>

      {/* Search Form */}
      <div className="searchForm">
        <input
          type="text"
          name="bloodgroup"
          placeholder="Required Blood Group"
          value={searchData.bloodgroup}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={searchData.city}
          onChange={handleChange}
        />

        <select
          name="availability"
          value={searchData.availability}
          onChange={handleChange}
        >
          <option value="">Availability</option>
          <option value="Urgent">Urgent</option>
          <option value="Later">Later</option>
          <option value="Not Sure">Not Sure</option>
        </select>

        <button className="searchDonorBtn" onClick={handleSearchDonor}>
          Search Donor
        </button>
        <button className="BackToDashboardBtn" onClick={navigateToDashboard}>
          Back to Dashboard
        </button>
      </div>

      {/* Search Results */}
      <div className="donorResults">
        {donors.length > 0 ? (
          donors.map((info) => {
            return (
              <div className="donorCard" key={info._id}>
                <h3>{info.fullname}</h3>
                <p>Blood Group: {info.bloodgroup}</p>
                <p>City: {info.city}</p>
                <p>Status: {info.availability}</p>

                <button
                  className="sendRequestBtn"
                  onClick={() => handleSendRequest(info)}
                >
                  Send Request
                </button>
              </div>
            );
          })
        ) : (
          <p className="noDonor">
            No donors found yet. Search to see matching donors.
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchDonor;
