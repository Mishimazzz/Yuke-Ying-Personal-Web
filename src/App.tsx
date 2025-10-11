import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import YingYechang from "./YingYechang/YingYechangPage";
import Cunt from "./CUNT/CUNTPage";
import ZeroTwoFour from "./024/024Page";
import NaiNai from "./Nainai/NainaiPage";
import QuenchThirst from "./QuenchThirst/QuenchThirstPage";
import DisciplineArchive from "./Discipline/DisciplineArchivePage";
import SpaceCity from "./SpaceCity/SpaceCityPage";
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
          <Route path="/disciplinearchive" element={<DisciplineArchive />} />
          <Route path="/spacecity" element={<SpaceCity />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;