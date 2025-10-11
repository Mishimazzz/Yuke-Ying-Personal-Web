import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import DisciplineArchiveTextPart from './DisciplineArchiveTextPart'
function DisciplineArchive() {
  return (
    <div>
      <LeftSideBar />
      <DisciplineArchiveTextPart />
      <RightSideBar />
    </div>
  );
}
export default DisciplineArchive;