import styles from "./QuenchThirstTextPart.module.css"
import {useState} from 'react'
import { useLanguage } from '../components/LanguageContext';
function QuenchThirstTextPart()
{
  const images = [
    "/picture/QuenchThirst/quench_3.jpg",
    "/picture/QuenchThirst/quench_4.jpg",
    "/picture/QuenchThirst/quench_5.jpg",
    "/picture/QuenchThirst/quench_6.jpg",
    "/picture/QuenchThirst/quench_7.jpg",
    "/picture/QuenchThirst/quench_8.jpg",
    "/picture/QuenchThirst/quench_9.jpg",
    "/picture/QuenchThirst/quench_10.jpg",
    "/picture/QuenchThirst/quench_11.jpg",
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
            {language === "zh" ? (<span className="zh-font" style={{ fontFamily: "HY Jin", fontSize: "21.6px", display: "inline-block" }}>止渴</span>) : ("Quench Thirst")}
          </h3>
          <div className={`content ${isOpen ? "open" : ""} ${language === "zh" ? "zh-font" : ""}`}>
            {language === "zh" ? (
              <p style={{ maxWidth: "430px", lineHeight: "27.3px", fontSize: "16.2px"}}>
                <br />
                在阅读何翔宇的《
                <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}>Yellow Book</span>》后，我对他的“柠檬计划”
                及其背后的思考产生了浓厚兴趣。当我们试图观察一个对象，真正重要的从来不只是物质本身——其背后的历史，以及我们自身个体的经验，
                杂糅着塑造出它对我们而言的“本质”。
                <br /><br />
                出于对这一现象学探究的好奇，我创作了一本小刊物，并以中国古代成语“望梅止渴”为名。《止渴》
                以半透明的硫酸纸印制，无装帧，呈松散的卷轴状。黄色在纸张中若隐若现，暧昧地展示着事物本身
                与其所引发的印象之间的联系。刊物中的所有图像版权均归艺术家本人所有。本项目仅为校内学业创作，
                不涉及任何商业意图。

              </p>
            ) : (
              <p style={{ maxWidth: "780px", lineHeight: "27.3px", fontSize: "17.8px" }}>
              <br />
              After reading He Xiangyu’s 
              <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}> Yellow Book</span>, 
              I became intrigued by his 
              <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}> Lemon Project</span>. 
              When we attempt to observe an object, it is never the object alone that matters—its history 
              and the weight of our own experiences converge to shape the impression it leaves upon us.
              <br /><br />
              Fascinated by this phenomenological inquiry, I created a zine titled after the ancient 
              Chinese idiom “quenching thirst by thinking of plums.” 
              <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}> Quench Thirst </span>
              is printed on 
              translucent sulfite paper and delicately folded in a scroll-like form. The yellow hue 
              subtly glows through the paper, probing the relationship between an object and the 
              impressions it engenders. All images in this zine are copyrighted to the artist. 
              This project is created solely as a school work and carries no commercial intent.
            </p>
            )}
          </div>
        </div>
        {/* 默认1920宽 */}
        <img src="/picture/QuenchThirst/quench_1.jpg" alt="" style={{ transform: "translateX(-400px) rotate(-5deg) scale(1.3)", marginTop: "160px" }} />
        <img src="/picture/QuenchThirst/quench_2.jpg" alt="" style={{ transform: "translateX(260px) rotate(5deg) scale(1.3)", marginTop: "280px" }} />
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

      <div className="bottom-img">
        <img src="/picture/QuenchThirst/quench_12.jpg" alt="" style={{
          transform: "translateX(335px) ", width: "1250px",height: "auto", }} />
      </div>
    </div>
    
  );
}
export default QuenchThirstTextPart;