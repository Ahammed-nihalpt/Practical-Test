import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Dashboard from "../../Components/Home/Home";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing_page">
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default LandingPage;
