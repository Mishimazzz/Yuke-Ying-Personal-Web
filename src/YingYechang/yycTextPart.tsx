import "./yycTextPart.css"
import {useState} from 'react'
import { useLanguage } from '../components/LanguageContext';
function YycTextPart()
{
  const images = [
    "/picture/yingyechang/yyc_3.png",
    "/picture/yingyechang/yyc_4.png",
    "/picture/yingyechang/yyc_5.png",
    "/picture/yingyechang/yyc_6.png",
    "/picture/yingyechang/yyc_7.png",
    "/picture/yingyechang/yyc_8.png",
    "/picture/yingyechang/yyc_9.png",
    "/picture/yingyechang/yyc_10.png",
    "/picture/yingyechang/yyc_11.png",
    "/picture/yingyechang/yyc_12.png",
    "/picture/yingyechang/yyc_13.png",
    "/picture/yingyechang/yyc_14.png",
    "/picture/yingyechang/yyc_15.png",
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
            {language === "zh" ? (<span className="zh-font" style={{ fontFamily: "HY Jin", fontSize: "19.2px", display: "inline-block" }}>应业長</span>) : ("Everlasting Good Karma")}
          </h3>
          <div className={`content ${isOpen ? "open" : ""} ${language === "zh" ? "zh-font" : ""}`}>
            {language === "zh" ? (
              <p style={{ maxWidth: "550px", lineHeight: "25px", fontSize: "14.5px"}}>
                <br />
                《应业長》（ <span style={{ fontFamily: "GT Alpina Italic", fontSize: "15.5px" }}>Everlasting Good Karma</span>）是一本为我年届八十五岁的爷爷应业长先生设计并制作的自传书。过去两年里，他亲笔写下万字回忆，并整理了一生的旧照片，试图留下一些可以流传的、能够证明自己存在的、比肉身相对更永恒的东西。
                <br /><br />
                全书分为文字与图像两部分。文字部分按时间顺序讲述他丰富的工作经历，背景暗藏他年老后的各式病症处方。我走访并拍摄了他曾经生活、工作过的地点——大多已废弃或被改建，这些照片也作为文字部分的背景补充。
                <br /><br />
                图像部分则收录了他自己拍摄或被拍摄的旧照片，并以倒叙方式编排，从晚年回望青年，呈现出他在不同阶段的容貌、处境以及陪伴在他身边的人。
              </p>
            ) : (
                <p style={{ maxWidth: "700px", lineHeight: "25px", fontSize: "15.5px", letterSpacing:"0.02em" }}>
              <br />
              <span style={{ fontFamily: "GT Alpina Italic", fontSize: "15.5px" }}>Everlasting Good Karma </span> 
              is a memoir designed and produced for my grandfather, <span style={{ fontFamily: "HY Jin", fontSize:"14.5px"}}>应业长</span>, at the age of
              85. Over the past two years, he handwrote tens of thousands of words reflecting on his life,
              and carefully compiled a collection of old photographs—hoping to leave behind something more
              enduring than the body itself, something that could mark his presence beyond time.
              <br /><br />
              The book is divided into two parts: text and images. The written section presents a chronological
              narrative of his working life, with subtle references to the illnesses and prescriptions that have
              accompanied his old age. To accompany the text, I revisited and photographed the homes and
              workplaces he once inhabited—many of which are now abandoned or transformed. The image
              section consists of old photographs taken throughout his life. Arranged in reverse chronological
              order, they trace his appearance, circumstances, and companions—from the present day back to
              his youth.
              </p>
            )}
          </div>
        </div>
        {/* 默认1920宽 */}
        <img src="/picture/yingyechang/yyc_1.png" alt="" className="yyc-image"
          style={{
            "--x": "-490px",
            "--rotate": "10deg",
            "--scale": "1.5",
            "--top": "180px"
          } as React.CSSProperties} />
        {language === "zh" ? (
          <p style={{ fontFamily: "HY Jin", fontSize: "16.2px", color: "var(--font-color-orange)", transform: " rotate(10deg) translateX(350px) translateY(-500px)", letterSpacing: "1.2px" }}>
            尺寸：<span style={{ fontFamily: "GT Alpina", fontSize: "17.8px" }}>142 × 210  mm</span><br />
            页数：<span style={{ fontFamily: "GT Alpina", fontSize: "17.8px" }}>304</span>页<br />
            首版：<span style={{ fontFamily: "GT Alpina", fontSize: "17.8px" }}>200</span>份<br />
            仅赠亲友阅读，无商业意图。<br />
          </p>
        ) : (
            <p style={{ fontFamily: "GT Alpina", fontSize: "17.8px", color: "var(--font-color-orange)", transform: " rotate(10deg) translateX(350px) translateY(-500px)", letterSpacing: "1.2px" }}>
              Size: 142 × 210 mm<br />
              Page count: 304 pages<br />
              First edition: 200 copies<br />
              For reading only, not for sale.<br />
            </p> 
        )}
        <img src="/picture/yingyechang/yyc_2.png" 
          className="yyc-image"
          alt="" style={{
          "--x": "220px",
          "--rotate": "0deg",
          "--scale": "1.6",
            "--top": "0px"
          } as React.CSSProperties} />
      </div>
      
      {/* slider */}
      <div className="slider">
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

      <div className="bottom-img">
        <img src="/picture/yingyechang/yyc_17.jpg" alt="" style={{
          transform: "translateX(90px) translateY(0px)", width: "1700px",height: "auto", }} />
      </div>
    </div>
    
  );
}
export default YycTextPart;