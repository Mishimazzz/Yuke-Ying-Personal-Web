import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import YycTextPart from './yycTextPart'
import '../index.css';

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