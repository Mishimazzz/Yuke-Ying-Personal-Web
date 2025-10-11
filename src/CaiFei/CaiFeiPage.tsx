import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import CaiFeiTextPart from './CaiFeiTextPart'

function CaiFei() {
  return (
    <div>
      <LeftSideBar />
      <CaiFeiTextPart />
      <RightSideBar />
    </div>
  );
}
export default CaiFei;