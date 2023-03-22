import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ListPage from "./Pages/ListPage/ListPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
