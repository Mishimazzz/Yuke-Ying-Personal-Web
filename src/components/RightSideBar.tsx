import "./RightSideBar.css"
import { useLanguage } from "./LanguageContext";

function RightSideBar()
{
  const { language, toggleLanguage } = useLanguage();

  return(
    <div className="right-section">
      {/* TODO: 记得把这个换成中英文的switcher */}
      <p onClick={toggleLanguage} style={{ cursor: "pointer" }}>
        <span className="chinese">中</span>
        <span className="english">/EN</span>
      </p>
    </div>
  );
}
export default RightSideBar;