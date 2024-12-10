import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Sign-in */}
        <Route path="/signin" element={<Signin />} />

        {/* Route for Sign-up */}
        <Route path="/signup" element={<Signup />} />

        {/* Route for Landing Page */}
        <Route path="/landing" element={<LandingPage />} />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
