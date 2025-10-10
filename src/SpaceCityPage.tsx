import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'
import SpaceCityTextPart from './SpaceCity/SpaceCityTextPart'

function SpaceCity() {
  return (
    <div>
      <LeftSideBar />
      <SpaceCityTextPart />
      <RightSideBar />
    </div>
  );
}
export default SpaceCity;