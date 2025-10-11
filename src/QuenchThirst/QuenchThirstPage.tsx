import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import QuenchThirstTextPart from './QuenchThirstTextPart'
function QuenchThirst() {
  return (
    <div>
      <LeftSideBar />
      <QuenchThirstTextPart />
      <RightSideBar />
    </div>
  );
}
export default QuenchThirst;