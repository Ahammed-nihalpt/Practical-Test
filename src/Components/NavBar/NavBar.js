import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="options">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/list")}>List</button>
      </div>
    </div>
  );
}

export default NavBar;
