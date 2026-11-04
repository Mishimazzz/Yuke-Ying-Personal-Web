import { useState } from "react";
import { useLanguage } from "../components/LanguageContext";
import styles from "./HKaGaTextPart.module.css";

function HKaGaTextPart() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <main className={`middle-section ${styles.page}`}>
      <div className={styles.textBox}>
        <h3
          className={styles.title}
          onClick={() => setIsOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsOpen((open) => !open);
            }
          }}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
        >
          {language === "zh" ? (
            <span className="zh-font">香港画廊协会艺术指南</span>
          ) : (
            "HKAGA Art Guide"
          )}
        </h3>

        <div
          className={`${styles.content} ${isOpen ? styles.open : ""} ${
            language === "zh" ? "zh-font" : ""
          }`}
        >
          {language === "zh" ? (
            <p className={styles.chineseCopy}>
              每年香港巴塞尔艺术展期间，香港画廊协会都会发布更新版的地图与指南，涵盖城中大部分画廊，为访客探索香港的艺术生态提供清晰路径。受何翩翩与麦石设计工作室委托，我设计了二零二五年度的地图。我们以青、品红、黄三种印刷色，将香港的画廊分布划分为三个区域，构建出直观的视觉叙事，让读者能够轻松辨识地图的地理结构。
            </p>
          ) : (
            <p className={styles.englishCopy}>
              Each year during Art Basel Hong Kong, the Hong Kong Art Gallery
              Association distributes an updated map and guide that features the
              majority of galleries across the city, offering visitors a way to
              explore Hong Kong&rsquo;s art landscape. Commissioned by Studio
              Pianpian He and Max Harvey, I designed the 2025 edition of the map.
              By categorizing Hong Kong&rsquo;s gallery distribution into three
              distinct zones using the Cyan, Magenta, and Yellow printing
              pigments, we crafted an intuitive visual narrative that allows
              audiences to effortlessly decode the map&rsquo;s geographical layout.
            </p>
          )}
        </div>
      </div>

      <div className={styles.imageStack}>
        <img
          src="/picture/HKAGA/HKAGA_1.png"
          alt="The unfolded 2025 HKAGA Art Guide map"
        />
        <img
          src="/picture/HKAGA/HKAGA_2.JPG"
          alt="The HKAGA Art Guide displayed on a wall"
        />
        <img
          src="/picture/HKAGA/HKAGA_3.jpg"
          alt="Detail of the HKAGA Art Guide map legend"
        />
      </div>
    </main>
  );
}

export default HKaGaTextPart;
