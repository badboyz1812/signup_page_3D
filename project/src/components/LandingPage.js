import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to the Landing Page!</h1>
        <p>Your sign-in was successful. Enjoy exploring the app!</p>
      </header>
      <main className="landing-content">
        <button 
          className="logout-button" 
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/"; 
          }}
        >
          Log Out
        </button>
      </main>
    </div>
  );
}

export default LandingPage;
