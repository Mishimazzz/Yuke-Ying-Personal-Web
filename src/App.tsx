import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import YingYechang from "./YingYechangPage";
import { LanguageProvider } from "./components/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/yingyechang" element={<YingYechang />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;