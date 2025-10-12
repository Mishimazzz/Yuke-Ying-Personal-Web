import "./RightSideBar.css"
import { useLanguage } from "./LanguageContext";

function RightSideBar()
{
  const { language,toggleLanguage } = useLanguage();

  const setLanguage = (lang: "zh" | "en") =>
  {
    if (lang != language)
    {
      localStorage.setItem("lang",lang);
      window.location.reload();
    }
  }

  return(
    <div className="right-section">
      <span onClick={ () => setLanguage("zh")} style={{ cursor: "pointer" }}>
        <span className="chinese">中</span>
      </span>
      <span onClick={ () => setLanguage("en")} style={{ cursor: "pointer" }}>
        <span className="english">/EN</span>
      </span>
    </div>
  );
}
export default RightSideBar;