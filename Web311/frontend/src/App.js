// frontend/src/App.js
import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
