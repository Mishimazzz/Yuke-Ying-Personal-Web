import './HomePage.css'
import LeftSideBar from './components/LeftSideBar'
import MiddleSection from './components/MiddleSection'

function HomePage() {

  return (
    <div>
      {/* left section */}
      <LeftSideBar />
      {/* middle section */}
      <MiddleSection />
    </div>
  )
}

export default HomePage