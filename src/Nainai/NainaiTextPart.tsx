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
              "nainai"
            ) : (
              "nainai"
            )}
          </h3>
          <div
            className={`${styles.content} ${isOpen ? styles.open : ""} ${language === "zh" ? "zh-font" : ""
              }`}
          >
            {language === "zh" ? (
              <p style={{ maxWidth: "430px", lineHeight: "27.3px", fontSize: "16.2px" }}>
                <br />
                <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}>nainai </span>
                是我创立的同名品牌的衍生阅读物，聚焦中文语境下中老年女性性福用品。它采用报纸的形式，适应中老年群体的阅读习惯，同时在视觉上延续品牌包装风格，以大胆色彩和直白文字呈现主题。
                <br /><br />
                首期内容包括四篇专题文章（如性健康专家的知识普及、读者匿名投稿的性爱故事等），定期产品推荐、本地征友栏目，以及“nainai黄历”板块。我们借用报纸这一原始传播媒介，唤起人们对性的本能感知，尝试将中老年人性生活跳出黑箱。
                <br /><br />
                如报纸卷首语所言，nainai 旨在创造一个没有中央、没有异端审判、甚至没有姓名，只呼吁本能感受的言论竞技场。奶奶，你不必感到羞耻。
              </p>
            ) : (
              <p style={{ maxWidth: "767px", lineHeight: "27.3px", fontSize: "17.8px" }}>
                <br />
                <span style={{ fontFamily: "GT Alpina Italic", fontSize: "17.8px" }}> nainai  </span>
                  is a print publication derived from my eponymous brand, which focuses on sexual wellness products for middle-aged and elderly women. Designed in the format of newspaper, it reflects the reading habits of older generations while visually echoing the brand’s packaging—featuring bold colors and suggestive language.
                  <br /><br />
                  The debut issue includes four articles (ranging from expert insights on sexual health to personal stories collected online), sexual product ads, a local dating section, and a "nainai almanac." By using the newspaper—a primitive yet familiar mode of communication—we aim to evoke a primal understanding of sexuality and normalize sexual experiences, especially in later life.
                  <br /><br />
                  As stated in the newspaper’s preface, nainai seeks to create an arena of discourse without a center, without heresy trials, without even names—only a call to speak from instinct. May every grandma (pronounced /nainai/ in Chinese) feel no shame about her desires.
              </p>
            )}
          </div>
        </div>
        {/* 默认1920宽 */}
        <img className="nainai_image" src="picture/Nainai/nainai_1.jpg" alt="" style={{ transform: "translateX(-80px) translateY(280px) rotate(5deg) scale(1.9)", marginTop: isOpen ? "70px" : "150px", transition: "margin-top 0.2s ease" }} />
        {language === "zh" ? (
          <p style={{ fontFamily: "HY Jin", fontSize: "16.2px", color: "var(--font-color-pink)", transform: " rotate(5deg) translateX(-445px) translateY(550px)", width: "250px", textAlign: "left" }}>
            尺寸：340 × 486 mm<br />
            页数：4 跨页<br />
            首刊由草蛇灰线出版小组发行。<br />
          </p>
        ) : (
            <p style={{ fontFamily: "GT Alpina", fontSize: "17.8px", color: "var(--font-color-pink)", transform: " rotate(5deg) translateX(-445px) translateY(550px)", width: "400px", textAlign: "left" }}>
            Size: 340 × 486 mm<br />
            Page count: 4 spreads<br />
            The debut issue published by Foreshadow Pub.<br />
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