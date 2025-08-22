import "./LeftSideBar.css";
import { useLocation } from "react-router-dom"

function LeftSideBar()
{
  // 根据location去更改文字信息
  const location = useLocation();
  const isHomePage = location.pathname === "/"

  return (
    <div className="left-section">
      <div className="TopBar">
        {isHomePage ? (
          <div>
            <p>
              Aoao Ying Graphic design. Selected works. (2025)
              <br /><br />
              aoaoying.work@gmail.com | Ⓟ158-8899-0202
              <br />
              Live and work currently in southeastern CN.
            </p>
          </div>
        ) : (
          <div>
            <p className="works-font">Aoao Ying Graphic design.</p>
          </div>
        )}
      </div>
      
      {isHomePage && (
        <div className="BottomBar">
          <p>Aoao Ying Photography. ↪</p>
        </div>
      )}
    </div>
  );
}

export default LeftSideBar;