// import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import YingYechang from "./YingYechangPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yingyechang" element={<YingYechang />} />
      </Routes>
    </Router>
  );
}

export default App;