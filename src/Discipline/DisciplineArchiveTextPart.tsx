import styles from "./DisciplineArchiveTextPart.module.css"
import { useState } from 'react'
import { useLanguage } from '../components/LanguageContext';
function DisciplineArchiveTextPart() {
  const images = [
    "/picture/Displine/displine_3.jpg",
    "/picture/Displine/displine_4.jpg",
    "/picture/Displine/displine_5.jpg",
    "/picture/Displine/displine_6.jpg",
    "/picture/Displine/displine_7.jpg",
    "/picture/Displine/displine_8.jpg",
    "/picture/Displine/displine_9.jpg",
    "/picture/Displine/displine_10.jpg",
    "/picture/Displine/displine_11.jpg",
    "/picture/Displine/displine_12.jpg",
    "/picture/Displine/displine_13.jpg",
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
            className="title"
            onClick={() => setIsOpen(!isOpen)}>
            {language === "zh" ? (<span className="zh-font" style={{ fontFamily: "HY Jin", fontSize: "21.6px", display: "inline-block" }}>规训档案</span>) : ("Discipline Archive")}
          </h3>
          <div className={`content ${isOpen ? "open" : ""} ${language === "zh" ? "zh-font" : ""}`}>
            {language === "zh" ? (
              <p style={{ maxWidth: "430px", lineHeight: "27.3px", fontSize: "16.2px" }}>
                <br />
                对“正常”的裁决随处可见，由整个社会操控。我们自动自发地调节自我的行为，使其接近社会的标准，而不去质疑决定现实的权力结构。《规训档案》是我对我二十四年来追求并巩固“正确”“正常”定义的反
                思，为理解自我和权力系统之间的关系提供一种解读视角。人类是否自愿自发带上脚铐？如果是，我又是否有走出洞穴的勇气？
                <br /><br />
                这个项目由装在档案袋中的二十四张丝网印刷海报组成，每张海报对应一个伴随成长的规训物件或观念
                ——如身份证、字帖、校服、交通规则、宗教信仰、简历、社会话语、亲密关系、医疗处方等。绿色油墨
                印在牛皮纸上，象征“正确”或“通行”，过分鲜艳饱和的颜色传递出一种“有毒”的感受，暗示“正常性”概念所带来的压迫。随着海报顺序推进，绿色油墨的覆盖也逐渐增多，是一道个体逐渐趋于社会“正常
                人”规范的轨迹。
              </p>
            ) : (
              <p style={{ maxWidth: "770px", lineHeight: "27.3px", fontSize: "17.8px" }}>
                <br />
                Judgments of normality are pervasive—enforced not just by individuals, 
                but by entire social systems. We internalize these codes, disciplining ourselves 
                into “correct” behavior without ever questioning the authority that defines it. 
                <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}> Discipline Archive </span>
                is a personal examination of my own self-disciplining process—a lens through which 
                I interrogate the relationship between my ego and the system of power. Are we willing participants in our own control? And if so, do I have the courage to deviate?
                <br /><br />
                This project consists of 24 screen-printed posters, stored in an archival bag. Each print corresponds to an object or concept of learned discipline that has accompanied my growth—such as ID cards, copybooks, uniforms, traffic regulations, religion, résumés, social discourse, intimacy, prescriptions, and more. Green ink, printed on kraft paper, stands in for the idea of correctness or permitted passage. Yet the thick, glossy ink evokes a kind of toxicity, suggesting the suffocating nature of what is called "normal." As the posters progress, the amount of green increases—visually tracing my gradual conformity to the norms of a so-called functional society.

              </p>
            )}
          </div>
        </div>
        {/* 默认1920宽 */}
        <img src="/picture/Displine/displine_1.jpg" alt="" style={{ transform: "translateX(180px) rotate(0deg) scale(1.45)", marginTop: "180px" }} />
        <img src="/picture/Displine/displine_2.jpg" alt="" style={{ transform: "translateX(-350px) rotate(0deg) scale(1.45)", marginTop: "300px" }} />
        {language === "zh" ? (
          <p style={{ fontFamily: "HY Jin", fontSize: "16.2px", color: "var(--font-color-brown)", transform: " rotate(0deg) translateX(670px) translateY(-660px)", width: "250px", textAlign: "left", letterSpacing: "1.2px" }}>
            单张尺寸：<span style={{ fontFamily: "GT Alpina", fontSize: "17.8px" }}>300 × 420 mm</span><br />
            档案袋尺寸：<span style={{ fontFamily: "GT Alpina", fontSize: "17.8px" }}>350 × 500 mm</span><br />
            无再版印制。<br />
            由草蛇灰线出版小组发行。<br />
          </p>
        ) : (
            <p style={{ fontFamily: "GT Alpina", fontSize: "17.8px", color: "var(--font-color-brown)", transform: " rotate(0deg) translateX(670px) translateY(-660px)", width: "300px", textAlign: "left", letterSpacing: "1.2px" }}>
            Single sheet size: 300 × 420 mm<br />
            Archive size: 350 × 500 mm<br />
            Not subject to reprint.<br />
            Published by Foreshadow Pub. <br />
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
          className={styles.slide}
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
export default DisciplineArchiveTextPart;