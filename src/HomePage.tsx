import './HomePage.css'
import LeftSideBar from './components/LeftSideBar'
import MiddleSection from './components/MiddleSection'
import RightSideBar from './components/RightSideBar'

function HomePage() {

  return (
    <div className='container'>
      <LeftSideBar />
      <MiddleSection />
      <RightSideBar />
    </div>
  )
}

export default HomePage