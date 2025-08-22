import './HomePage.css'
import LeftSideBar from './components/LeftSideBar'
import MiddleSection from './components/MiddleSection'
import RightSideBar from './components/RightSideBar'

function HomePage() {

  return (
    <div className='container'>
      <div className='topbar'></div>
      <LeftSideBar />
      <MiddleSection />
      <RightSideBar />
      <div className='bottombar'></div>
    </div>
  )
}

export default HomePage