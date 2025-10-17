import styles from "./SpaceCityTextPart.module.css";
import { useState } from 'react'
import { useLanguage } from '../components/LanguageContext';

function SpaceCityTextPart() {
  const images = [
    "/picture/SpaceCity/Space_2.JPEG",
    "/picture/SpaceCity/Space_3.JPG",
    "/picture/SpaceCity/Space_4.JPG",
    "/picture/SpaceCity/Space_5.JPEG",
    "/picture/SpaceCity/Space_6.JPG",
    "/picture/SpaceCity/Space_7.JPG",
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
              "Space City: Art in the Age of Artemis"
            ) : (
              "Space City: Art in the Age of Artemis"
            )}
          </h3>
          <div
            className={`${styles.content} ${isOpen ? styles.open : ""} ${language === "zh" ? "zh-font" : ""
              }`}
          >
            {language === "zh" ? (
              <p style={{ maxWidth: "550px", lineHeight: "25px", fontSize: "14.5px" }}>
                <br />
                在美国计划重返月球的时代，位于“太空城”休斯顿的亚洲协会得克萨斯分会举办了名为 
                “<span style={{ fontFamily: "GT Alpina Italic", fontSize: "15.5px" }}>Space City: Art in the Age of Artemis</span>” 的展览。展览汇集三十余位艺术家的作品，贯穿宇宙、艺术、科学与人类好奇心。在展览的视觉设计中，我使用太空中的失重概念设计字体排印，并完善制作了全展览的大小物料。
              </p>
            ) : (
              <p style={{ maxWidth: "700px", lineHeight: "25px", fontSize: "15.5px",letterSpacing:"0.02em" }}>
                <br />
                In the era of America’s renewed mission to the Moon, Asia Society Texas in 
                Houston—familiarly known as “Space City”—presents the exhibition 
                  <span style={{ fontFamily: "GT Alpina Italic", fontSize: "15.5px" }}> Space City: Art in the Age of Artemis</span> . 
                Featuring works by more than 30 artists, the show travels through art, science, 
                and human curiosity, inviting visitors to embark on an imaginative journey 
                across the cosmos.
                <br /><br />
                For the exhibition’s visual identity, I drew on the concept of weightlessness in 
                space to shape the typography, and extended it across the full range of exhibition
                materials.

              </p>
            )}
          </div>
        </div>
        {/* 默认1920宽 */}
        <img src="/picture/SpaceCity/Space_1.JPG" alt="" style={{ transform: "translateX(-300px) rotate(2deg) scale(1.6)", marginTop: "230px" }} />
        {language === "zh" ? (
          <p style={{ fontFamily: "GT Alpina", fontSize: "17.8px", color: "var(--font-color-purple)", transform: " rotate(2deg) translateX(760px) translateY(-695px)", width: "330px", textAlign: "left", letterSpacing: "1.2px" }}>
            客户：亚洲协会得克萨斯分会<br />
            艺术指导：何翩翩与麦石设计工作室<br />
            封面图片：<span style={{ fontFamily: "GT Alpina", fontSize: "17.8px" }}>James Clar</span><br />
          </p>
        ) : (
            <p style={{ fontFamily: "GT Alpina", fontSize: "17.8px", color: "var(--font-color-purple)", transform: " rotate(2deg) translateX(760px) translateY(-695px)", width: "380px", textAlign: "left", letterSpacing: "1.2px" }}>
            Client: Asia Society Texas<br />
            AD: Studio Pianpian He and Max Harvey<br />
            Cover Image: James Clar<br />
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
export default SpaceCityTextPart;