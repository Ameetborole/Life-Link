import "../css/HomePage.css";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login-page");
  }

  function handleSignUp() {
    navigate("/signup-page");
  }
  function handleBecomeDonor() {
    navigate("/become-donor");
  }

  function handleFindDonor() {
    navigate("/find-donor");
  }
  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h2>Life Link</h2>
        </div>

        <div className="navButtons">
          <button className="loginBtn" onClick={handleLogin}>
            Login
          </button>
          <button className="signupBtn" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContent">
          <h1>Life Link</h1>
          <h3>A Kidney Donor Platform</h3>

          <p>
            Your kidney donation can give someone a second chance at life.
            Connecting donors, recipients, and hope — all in one place.
          </p>

          <div className="actionButtons">
            <button className="donorBtn" onClick={handleBecomeDonor}>
              Become a Donor
            </button>
            <button className="receiverBtn" onClick={handleFindDonor}>
              Find a Donor
            </button>
          </div>
        </div>
      </section>

      {/* Content + Image Section 1 */}
      <section className="contentSection">
        <div className="textContent">
          <h2>Why Kidney Donation Matters</h2>
          <p>
            Thousands of patients wait every day for a life-saving kidney
            transplant. Your support can restore hope, save families, and create
            a second chance for someone in need.
          </p>
        </div>

        <div className="imageContent">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            alt="Kidney Donation"
            width={220}
          />
        </div>
      </section>

      {/* Content + Image Section 2 */}
      <section className="contentSection reverse">
        <div className="imageContent">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309"
            alt="Medical Support"
            width={220}
          />
        </div>

        <div className="textContent">
          <h2>Trusted Medical Support</h2>
          <p>
            We help connect verified donors, recipients, and hospitals through a
            secure and transparent process built on trust and care.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="howItWorks">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="stepCard">
            <h3>1. Register</h3>
            <p>Create your donor or recipient profile securely.</p>
          </div>

          <div className="stepCard">
            <h3>2. Connect</h3>
            <p>Find matching donors and recipients easily.</p>
          </div>

          <div className="stepCard">
            <h3>3. Save Life</h3>
            <p>Help someone to begin a healthier new life.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Life Link © 2026 | Giving Hope, Saving Lives</p>
      </footer>
    </div>
  );
}

export default HomePage;
