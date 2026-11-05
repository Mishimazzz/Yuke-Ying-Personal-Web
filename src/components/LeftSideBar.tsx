import "./LeftSideBar.css";
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { useLanguage } from './LanguageContext';

function LeftSideBar()
{
  // 根据location去更改文字信息
  const location = useLocation();
  const isHomePage = location.pathname === "/"
  const { language } = useLanguage();

  return (
    <div className={`left-section ${isHomePage ? "left-section-home" : "left-section-detail"}`}>
      <div className="TopBar">
        {isHomePage ? (
          language === "zh" ? (
            <div className="zh-font">
              <p>
                应凹凹做了些平面设计。<br />
                目前工作、生活在中国东南部。
                <br /><br />
                欢迎任何形式的交流、委任与合作。<br />
                邮箱&nbsp;&nbsp;&nbsp;<span style={{ fontFamily:"HY Jin"}}>aoaoying.work@gmail.com</span><br />
                电话&nbsp;&nbsp;&nbsp;<span style={{ fontFamily: "HY Jin" }}>⑧⑥158−8899−0202</span>
              </p>
            </div>
          ) : (
            <div>
              <div className="eg-font">
              <p>
                Aoao Ying Graphic design. Selected works. (2025)
                <br /><br />
                aoaoying.work@gmail.com <span className="sep"> ｜ </span> ⑧⑥158-8899-0202
                <br />
              </p>
              </div>
              <div className="eg-font2">
                <p>
                  Live and work currently in southeastern CN.
                </p>
              </div>
            </div>
            
          )
        ) : (
          language === "zh" ? (
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                <p style={{ fontFamily: "HY Jin", fontSize: "19.2px", letterSpacing: "0.03em" }}>应凹凹做了些平面设计。</p>
            </Link>
          ) : (
            <div>
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                <p>Aoao Ying Graphic design.</p>
              </Link>
            </div>
          )
        )}
      </div>

      {isHomePage && (
        language === "zh" ? (
        <div className="BottomBar zh-font">
            <p>应凹凹做了点摄影。 ↩</p>
        </div>
        ) : (
          <div className="BottomBar en-font">
              <p>Aoao Ying Photography. ↩</p>
          </div>
        )
      )}
    </div>

  );
}

export default LeftSideBar;
