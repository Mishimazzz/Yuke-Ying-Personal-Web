import styles from "./CyberTextPart.module.css";
import { useState } from 'react'
import { useLanguage } from '../components/LanguageContext';

function CyberTextPart() {
  const images = [
    "/picture/Cyber/cybernetics_2.jpg",
    "/picture/Cyber/cybernetics_3.jpg",
    "/picture/Cyber/cybernetics_4.jpg",
    "/picture/Cyber/cybernetics_5.jpg",
    "/picture/Cyber/cybernetics_6.jpg",
    "/picture/Cyber/cybernetics_7.jpg",
    "/picture/Cyber/cybernetics_8.jpg",
  ]

  // arrow slider
  const [index, setIndex] = useState(0);
  const prev = () => { console.log("prev clicked", index); setIndex((index - 1 + images.length) % images.length) };
  const next = () => setIndex((index + 1) % images.length);

  //title clicker
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <div>
      <div className="middle-section" style={{ maxWidth: "800px" }}>
        <div className="text-box">
          <h3
            className={styles.title}
            onClick={() => setIsOpen(!isOpen)}>
            {language === "zh" ? (
              <>
                <span className="zh-font" style={{ fontFamily: "HY Jin", fontSize: "19.2px", display: "inline-block" }}>二十一世纪的控制论</span>
              </>
            ) : (
              "Cybernetics for the 21st Century"
            )}
          </h3>
          <div
            className={`${styles.content} ${isOpen ? styles.open : ""} ${language === "zh" ? "zh-font" : ""
              }`}
          >
            {language === "zh" ? (
              <p style={{ maxWidth: "550px", lineHeight: "25px", fontSize: "14.5px" }}>
                <br />
                《二十一世纪的控制论卷一：认识论重构》由香港<span style={{ fontFamily: "GT Alpina", fontSize: "15.5px" }}> Hanart Press </span>以开放获取的形式出版，主编为许煜。本书聚焦于控制论的认识论重建，收录了一系列关于这一学科的历史性与批判性反思——在马丁·海德格尔
                看来，控制论标志着西方形而上学的完成。
                <br /><br />
                我协助何翩翩与麦石工作室参与本书的内文版式与封面设计，并完整参与了排版与校对工作。

              </p>
            ) : (
                <p style={{ maxWidth: "700px", lineHeight: "25px", fontSize: "15.5px", letterSpacing: "0.02em" }}>
                <br />
                <span style={{ fontFamily: "GT Alpina Italic", fontSize: "15.5px" }}>Cybernetics for the 21st Century, Vol. 1</span> is published in open access by Hanart Press, Hong Kong, and edited by Yuk Hui. Dedicated to the epistemological reconstruction of cybernetics, the volume presents a series of historical and critical reflections on the field—one that, as Martin Heidegger argued, marked the completion of Western metaphysics.
                <br /><br />
                I contributed to the design of the book’s layout and cover alongside Studio Pianpian He and Max Harvey, and was fully involved in typesetting and proofreading.

              </p>
            )}
          </div>
        </div>
        {/* 默认1920宽 */}
        <img src="/picture/Cyber/cybernetics_1.jpg" alt="" style={{ transform: "translateX(-470px) rotate(5deg) scale(1.15)", marginTop: "110px" }} />
        {language === "zh" ? (
          <p style={{ fontFamily: "HY Jin", fontSize: "16.2px", color: "var(--font-color-cyber)", transform: " rotate(5deg) translateX(400px) translateY(-630px)", width: "350px", textAlign: "left", letterSpacing: "1.2px" }}>
            尺寸：<span style={{ fontFamily: "GT Alpina", fontSize: "15.5px" }}>148 × 210 mm</span><br />
            页数：<span style={{ fontFamily: "GT Alpina", fontSize: "15.5px" }}>271 </span>页<br />
            语言：英语<br />
        出版年份：<span style={{ fontFamily: "GT Alpina", fontSize: "15.5px" }}>2024</span><br />
            艺术指导：何翩翩与麦石设计工作室<br />
          </p>
        ) : (
            <p style={{ fontFamily: "GT Alpina", fontSize: "15.5px", color: "var(--font-color-cyber)", transform: " rotate(5deg) translateX(400px) translateY(-630px)", width: "350px", textAlign: "left", letterSpacing: "1.2px" }}>
            Size: 148 × 210 mm<br />
            Page count: 271 pages<br />
            Language: English<br />
            Publish year: 2024<br />
            AD: Studio Pianpian He and Max Harvey<br />
          </p>
        )}
      </div>

      {/* slider */}
      <div className={styles.slider}>
        <img
          src="/picture/yingyechang/arrowLeft.png"
          alt="prev_button"
          onClick={prev}
          className="arrow-left"
        />

        <img
          src={images[index]}
          alt="slide"
          className="slide"
        />

        <img
          src="/picture/yingyechang/arrowRight.png"
          alt="next_button"
          onClick={next}
          className="arrow-right"
        />
      </div>

    </div>

  );
}
export default CyberTextPart;