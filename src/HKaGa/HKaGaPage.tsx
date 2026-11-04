import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import HKaGaTextPart from "./HKaGaTextPart";

function HKaGa() {
  return (
    <div>
      <LeftSideBar />
      <HKaGaTextPart />
      <RightSideBar />
    </div>
  );
}

export default HKaGa;
