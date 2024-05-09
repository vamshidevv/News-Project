// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// import SideNavBar from "../SideNavBar";
import Dashboard from "../Dashboard";
import AdminSignIn from "../AdminSignIn";
import Home from "../Home";

const Routes1 = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* <SideNavBar /> */}
      <div style={{ flexGrow: 1, padding: "16px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<AdminSignIn />} />
        </Routes>
      </div>
    </div>
  );
};

export default Routes1;
