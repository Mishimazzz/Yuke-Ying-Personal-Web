import styles from "./CUNTTextPart.module.css";
import {useState} from 'react'
import { useLanguage } from '../components/LanguageContext';

function CUNTTextPart()
{
  const images = [
    "/picture/CUNT/cunt_1 .jpg",
    "/picture/CUNT/cunt_2 .jpg",
    "/picture/CUNT/cunt_3 .jpg",
    "/picture/CUNT/cunt_4 .jpg",
    "/picture/CUNT/cunt_5 .jpg",
    "/picture/CUNT/cunt_6 .jpg",
    "/picture/CUNT/cunt_7 .jpg",
    "/picture/CUNT/cunt_8 .jpg",
    "/picture/CUNT/cunt_9 .jpg",
    "/picture/CUNT/cunt_10 .jpg",
    "/picture/CUNT/cunt_11 .jpg",
    "/picture/CUNT/cunt_12 .jpg",
  ]

  // arrow slider
  const [index, setIndex] = useState(0);
  const prev = () => { console.log("prev clicked", index); setIndex((index - 1 + images.length) % images.length)};
  const next = () => setIndex((index + 1) % images.length);

  //title clicker
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  return(
    <div>
      <div className="middle-section" style={{ maxWidth: "800px" }}>
        <div className="text-box">
          <h3
            className="title"
            onClick={() => setIsOpen(!isOpen)}>
            {language === "zh" ? (
              <>
                <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}>CUNT </span>
                <span className="zh-font" style={{ fontFamily: "HY Jin", fontSize: "21.6px", display: "inline-block" }}>杂志</span>
              </>
            ) : (
              "CUNT Magazine"
            )}
          </h3>
            <div
              className={`${styles.content} ${isOpen ? styles.open : ""} ${language === "zh" ? "zh-font" : ""
                }`}
            >
            {language === "zh" ? (
              <p style={{ maxWidth: "430px", lineHeight: "27.3px", fontSize: "16.2px"}}>
                <br />
                <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}>CUNT </span>
                是一本我在学生时期自发创作的虚构杂志，关注在不同领域中创造、发明与表达的女性们。
                这本杂志旨在直面她们的声音——她们的作品、生活，以及她们选择分享的想法。
                重要的是她是谁，她迫切想说的是什么。
                <br /><br />
                创刊号的封面选用我非常喜爱的中国摄影师黎雨诗的作品。所有创作者均在杂志中完整署名，
                且本刊完全无商业发行或印售。
              </p>
            ) : (
              <p style={{ maxWidth: "782px", lineHeight: "27.3px", fontSize: "17.8px" }}>
              <br />
                  <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}>CUNT </span> 
                is a self-initiated, fictional magazine celebrating women who create, invent, and express 
                across diverse fields. Each issue amplifies their voices—their work, their lives, and the ideas 
                they choose to share. At its core, it is about who she is and what she has to say.
              <br /><br />
                The first issue features a cover photograph by Yushi Li (<span style={{ fontFamily: "HY Jin", fontSize: "16.2px" }}>黎雨诗</span>), 
                one of my favorite Chinese photographers. Every contributor is fully credited, and the magazine is entirely non-commercial, 
                with no distribution or sales.
            </p>
            )}
          </div>
        </div>
        {/* 默认1920宽 */}
        <img src="picture/CUNT/cunt_0 .png" alt="" style={{ transform: "translateX(250px) scale(1.2)", marginTop: "0px" }} />
        <p style={{ color: "var(--font-color-red)", transform: " rotate(60deg) translateX(-180px) translateY(-400px)", fontSize: "17.8px", width: "200px",textAlign:"left" }}>
          Size: 6.4 x 11 inch<br />
          Page count: 86 pages<br />
        </p>
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
export default CUNTTextPart;