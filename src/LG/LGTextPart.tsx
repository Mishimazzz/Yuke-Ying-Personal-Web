import styles from "./LGTextPart.module.css";
import { useState } from 'react'
import { useEffect } from "react";
import { useLanguage } from '../components/LanguageContext';

function LGTextPart() {
  //title clicker
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

   useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    // 进入 LG 页面
    root.style.overflowY = "visible";
    root.style.height = "auto";

    // 离开 LG 页面时还原
    return () => {
      root.style.overflowY = "auto";
      root.style.height = "100%";
    };
    }, []);

  return (
    <div>
      <div className="middle-section" style={{ maxWidth: "800px" }}>
        <div className="text-box">
          <h3
            className={styles.title}
            onClick={() => setIsOpen(!isOpen)}>
            {language === "zh" ? (<span className="zh-font" style={{ fontFamily: "HY Jin", fontSize: "19.2px", display: "inline-block" }}>曲若汐： 小草</span>)
              : (
              "Solveig Qu Suess: Little Grass"
            )}
          </h3>
        </div>
        {/* 默认1920宽 */}
        <img className="lg_image1" src="/picture/LG/little_grass_poster_highres_1.jpg" alt="" style={{ position:"absolute",left:"-100px",top:"0px", width:"55%", height:"auto",transform: "scale(0.6)", transition: "margin-top 0.2s ease" }} />
        <img className="lg_image2" src="/picture/LG/little_grass_poster_highres_2.jpg" alt="" style={{ position:"absolute",right:"-100px",top:"-200px", width:"55%", height:"auto",transform: "scale(0.6)", transition: "margin-top 0.2s ease" }} />
        {language === "zh" ? (
          <p style={{ fontFamily: "HY Jin", fontSize: "16.2px", color: "var(--font-color-pink)", transform: " rotate(5deg) translateX(-445px) translateY(550px)", width: "250px", textAlign: "left", letterSpacing: "1.2px" }}>
            尺寸：<span style={{ fontFamily: "GT Alpina", fontSize: "15.5px" }}>340 × 486 mm</span><br />
            页数：<span style={{ fontFamily: "GT Alpina", fontSize: "15.5px" }}>4 </span>跨页<br />
        首刊由草蛇灰线出版小组发行。<br />
      </p>
      ) : (
            <p style={{ fontFamily: "GT Alpina", fontSize: "15.5px", position:"absolute",left:"1180px",top:"1000px", width: "450px", textAlign: "left", letterSpacing: "1.2px" }}>
        Client: Solveig Qu Suess<br />
        AD: Studio Pianpian He and Max Harvey<br />
      </p>
        )}
    </div> 
    </div >

  );
}
export default LGTextPart;