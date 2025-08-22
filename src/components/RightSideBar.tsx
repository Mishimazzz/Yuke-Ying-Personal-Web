import "./RightSideBar.css"

function RightSideBar()
{
  return(
    <div className="right-section">
      {/* TODO: 记得把这个换成中英文的switcher */}
      <p>
        <span className="chinese">中</span>
        <span className="english">/EN</span>
      </p>
    </div>
  );
}
export default RightSideBar;