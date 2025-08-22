// import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import YingYechang from "./YingYechangPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/yingyechang">YingYechang</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yingyechang" element={<YingYechang />} />
      </Routes>
    </Router>
  );
}

export default App;