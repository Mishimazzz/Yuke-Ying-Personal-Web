import styles from "./NaiNaiTextPart.module.css";
import { useState } from 'react'
import { useLanguage } from '../components/LanguageContext';

function NaiNaiTextPart() {
  const images = [
    "/picture/Nainai/nainai_2.jpg",
    "/picture/Nainai/nainai_3.jpg",
    "/picture/Nainai/nainai_4.jpg",
    "/picture/Nainai/nainai_5.jpg",
    "/picture/Nainai/nainai_6.jpg",
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
              "No.024"
            ) : (
              "No.024"
            )}
          </h3>
          <div
            className={`${styles.content} ${isOpen ? styles.open : ""} ${language === "zh" ? "zh-font" : ""
              }`}
          >
            {language === "zh" ? (
              <p style={{ maxWidth: "430px", lineHeight: "27.3px", fontSize: "16.2px" }}>
                <br />
                <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}>《No.024》</span>
                是我在马里兰艺术学院平面设计硕士毕业项目的完整档案汇编。这本书收录了我的毕业论文、
                项目过程与成果的记录、展览的筹备与呈现、致谢名单等内容。书中的文字与大部分图像均由我创作，
                我也对其全权负责。 这个项目于我有很深的意义，它在我的旅途中轻轻按下一次暂停，又重重落下一颗石头。
              </p>
            ) : (
              <p style={{ maxWidth: "772px", lineHeight: "27.3px", fontSize: "17.8px" }}>
                <br />
                <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}> No.024  </span>
                is a book that serves as the complete archive of my MFA thesis project in Graphic Design at MICA.
                It compiles my thesis paper, project documentation, process notes, records of the exhibition's production
                and presentation, experimental detours, and credit listings. All writing and most images in the book were created by me,
                for which I take full authorship and responsibility.
                This book holds deep personal meaning. It marks a pause along the path of my life, a moment of reflection. It’s a symbolic stone.
              </p>
            )}
          </div>
        </div>
        {/* 默认1920宽 */}
        <img src="picture/024/024_1.png" alt="" style={{ transform: "translateX(-450px) rotate(-5deg) scale(1.4)", marginTop: "150px" }} />
        {language === "zh" ? (
          <p style={{ fontFamily: "HY Jin", fontSize: "16.2px", color: "var(--font-color-green)", transform: " rotate(-5deg) translateX(450px) translateY(-580px)", width: "200px", textAlign: "left" }}>
            尺寸：203 × 254 mm<br />
            页数：178 页<br />
            校方统一印刷，仅此一本。<br />
          </p>
        ) : (
          <p style={{ fontFamily: "GT Alpina", fontSize: "17.8px", color: "var(--font-color-green)", transform: " rotate(-5deg) translateX(450px) translateY(-580px)", width: "300px", textAlign: "left" }}>
            Size: 203 × 254 mm<br />
            Page count: 178 pages<br />
            School-issued, single copy only.<br />
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
export default NaiNaiTextPart;