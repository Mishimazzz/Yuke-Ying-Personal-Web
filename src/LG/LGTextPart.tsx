import { useLanguage } from "../components/LanguageContext";
import styles from "./LGTextPart.module.css";

function LGTextPart() {
  const { language } = useLanguage();

  return (
    <main className={styles.page}>
      <h3 className={styles.title}>
        {language === "zh" ? (
          <span className="zh-font">曲若汐： 小草</span>
        ) : (
          "Solveig Qu Suess: Little Grass"
        )}
      </h3>

      <div className={styles.stage}>
        <div className={styles.composition}>
          <img
            className={`${styles.poster} ${styles.posterOne}`}
            src="/picture/LG/little_grass_poster_highres_1.jpg"
            alt="Little Grass poster, first spread"
          />
          <div className={styles.posterTwoGroup}>
            <img
              className={styles.poster}
              src="/picture/LG/little_grass_poster_highres_2.jpg"
              alt="Little Grass poster, second spread"
            />

            {language === "en" && (
              <p className={`${styles.details} ${styles.detailsEn}`}>
                Client: Solveig Qu Suess<br />
                AD: Studio Pianpian He and Max Harvey
              </p>
            )}
          </div>

          {language === "zh" ? (
            <p className={`${styles.details} ${styles.detailsZh} zh-font`}>
              尺寸：<span className={styles.latin}>340 × 486 mm</span><br />
              页数：<span className={styles.latin}>4</span> 跨页<br />
              首刊由草蛇灰线出版小组发行。
            </p>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default LGTextPart;
