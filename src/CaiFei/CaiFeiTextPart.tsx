import styles from "./CaiFeiTextPart.module.css";
import { useState } from 'react'
import { useLanguage } from '../components/LanguageContext';

function CaiFeiTextPart() {
  const images = [
    "/picture/CaoFei/cftf_2.jpg",
    "/picture/CaoFei/cftf_3.jpg",
    "/picture/CaoFei/cftf_4.jpg",
    "/picture/CaoFei/cftf_5.jpg",
    "/picture/CaoFei/cftf_6.jpg",
    "/picture/CaoFei/cftf_7.jpg",
    "/picture/CaoFei/cftf_8.jpg",
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
                <span className="zh-font" style={{ fontFamily: "HY Jin", fontSize: "19.2px", display: "inline-block" }}>曹斐：潮汐宙合</span>
              </>
            ) : (
              "Cao Fei: Tidal Flux"
            )}
          </h3>
          <div
            className={`${styles.content} ${isOpen ? styles.open : ""} ${language === "zh" ? "zh-font" : ""
              }`}
          >
            {language === "zh" ? (
              <p style={{ maxWidth: "550px", lineHeight: "25px", fontSize: "14.5px" }}>
                <br />
                “曹斐：潮汐宙合”展示了曹斐跨越近三十年的艺术实践。展览占据整个浦东美术馆二层空间，以“非线性”的叙事方式，呈现艺术家多元且广泛的作品。这场精彩的展览由南希·斯佩克特、谭雪及杨北辰共同策展，展陈由曹斐工作室和BEAU建筑事务所共同设计。我协助何翩翩与麦石工作室设计展览视觉，参与绘制三维环境中“扭曲”的字体系统、导视设计与制作（霓虹灯牌与投影灯）、时间墙设计与展签制作等。
              </p>
            ) : (
                <p style={{ maxWidth: "700px", lineHeight: "25px", fontSize: "15.5px", letterSpacing: "0.02em" }}>
                <br />
                  <span style={{ fontFamily: "GT Alpina Italic", fontSize: "15.5px" }}>Cao Fei: Tidal Flux</span> offers a comprehensive overview of Cao Fei’s nearly thirty-year artistic journey. Occupying the museum’s entire second floor, the exhibition unfolds in a “non-linear” arrangement that animates her work through diverse perspectives. It is co-curated by Nancy Spector, Xue Tan, and Yang Beichen, with exhibition design by BEAU Architects.
                <br /><br />
                I assisted Studio Pianpian He and Max Harvey in refining the exhibition’s visual identity system. My contributions included the development of a three-dimensional “distorted” typography system, exhibition wayfinding (neon signage and projection lights), a timeline wall, and exhibition labels.

              </p>
            )}
          </div>
        </div>
        {/* 默认1920宽 */}
        <img src="/picture/CaoFei/cftf_1.jpg" alt="" style={{ transform: "translateX(-350px) scale(1.3) rotate(-5deg)", marginTop: "160px" }} />
        {language === "zh" ? (
          <p style={{ fontFamily: "HY Jin", fontSize: "16.2px", color: "var(--font-color-caofei)", transform: " rotate(-5deg) translateX(640px) translateY(-685px)", width: "400px", textAlign: "left", letterSpacing: "1.2px" }}>
            客户：曹斐<br />
            设计：何翩翩与麦石设计工作室<br />
            设计助理：应凹凹<br />
          </p>
        ) : (
            <p style={{ fontFamily: "GT Alpina", fontSize: "15.5px", color: "var(--font-color-caofei)", transform: " rotate(-5deg) translateX(640px) translateY(-685px)", width: "400px", textAlign: "left", letterSpacing: "1.2px" }}>
            Client: Cao Fei<br />
            AD&D: Studio Pianpian He and Max Harvey<br />
            Design Assistant: Aoao Ying<br />

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

      <div className={styles.bottomImg}>
        <img src="/picture/CaoFei/cftf_9.jpg" alt="" />
        <img src="/picture/CaoFei/cftf_10.jpg" alt="" />
        <img src="/picture/CaoFei/cftf_11.jpg" alt="" />
      </div>


    </div>

  );
}
export default CaiFeiTextPart;