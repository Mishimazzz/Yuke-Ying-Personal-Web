import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import YingYechang from "./YingYechangPage";
import Cunt from "./CUNTPage";
import ZeroTwoFour from "./024Page";
import NaiNai from "./NainaiPage";
import QuenchThirst from "./QuenchThirstPage";
import { LanguageProvider } from "./components/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/yingyechang" element={<YingYechang />} />
          <Route path="/cunt" element={<Cunt />} />
          <Route path="/zerotwofour" element={<ZeroTwoFour />} />
          <Route path="/nainai" element={<NaiNai />} />
          <Route path="/quenchthirst" element={<QuenchThirst />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;