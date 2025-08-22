import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'
import YycTextPart from './YingYechang/yycTextPart'
function YingYechang()
{
  return(
    <div>
      <LeftSideBar/>
      <YycTextPart />
      <RightSideBar/>
    </div>
  );
}
export default YingYechang;