import { useEffect, useState, type CSSProperties } from "react";
import { useLanguage } from "../components/LanguageContext";
import styles from "./SpaceCityTextPart.module.css";

const DESIGN_WIDTH = 1920;
const STAGE_ANCHOR_Y = 70;
const STAGE_HEIGHT = 2107;
const SLIDES = [
  "/picture/SpaceCity/Space_2.JPEG",
  "/picture/SpaceCity/Space_3.JPG",
  "/picture/SpaceCity/Space_4.JPG",
  "/picture/SpaceCity/Space_5.JPEG",
  "/picture/SpaceCity/Space_6.JPG",
  "/picture/SpaceCity/Space_7.JPG",
];

function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  return viewportWidth;
}

function ProjectDescription({ language }: { language: string }) {
  if (language === "zh") {
    return (
      <p className={`${styles.copy} ${styles.copyZh}`}>
        <br />
        在美国计划重返月球的时代，位于“太空城”休斯顿的亚洲协会得克萨斯分会举办了名为“
        <span className={styles.projectName}>
          Space City: Art in the Age of Artemis
        </span>
        ”的展览。展览汇集三十余位艺术家的作品，贯穿宇宙、艺术、科学与人类好奇心。在展览的视觉设计中，我使用太空中的失重概念设计字体排印，并完善制作了全展览的大小物料。
      </p>
    );
  }

  return (
    <p className={`${styles.copy} ${styles.copyEn}`}>
      <br />
      In the era of America’s renewed mission to the Moon, Asia Society Texas in
      Houston—familiarly known as “Space City”—presents the exhibition
      <span className={styles.projectName}>
        {" "}Space City: Art in the Age of Artemis
      </span>
      . Featuring works by more than 30 artists, the show travels through art,
      science, and human curiosity, inviting visitors to embark on an imaginative
      journey across the cosmos.
      <br />
      <br />
      For the exhibition’s visual identity, I drew on the concept of weightlessness
      in space to shape the typography, and extended it across the full range of
      exhibition materials.
    </p>
  );
}

function ProjectDetails({ language }: { language: string }) {
  if (language === "zh") {
    return (
      <p className={`${styles.details} ${styles.detailsZh}`}>
        客户：亚洲协会得克萨斯分会
        <br />
        艺术指导：何翩翩与麦石设计工作室
        <br />
        封面图片：<span className={styles.detailsLatin}>James Clar</span>
      </p>
    );
  }

  return (
    <p className={`${styles.details} ${styles.detailsEn}`}>
      Client: Asia Society Texas
      <br />
      AD: Studio Pianpian He and Max Harvey
      <br />
      Cover Image: James Clar
    </p>
  );
}

function ProjectCarousel({
  index,
  onPrevious,
  onNext,
}: {
  index: number;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className={styles.slider}>
      <img
        src="/picture/yingyechang/arrowLeft.png"
        alt="Previous slide"
        onClick={onPrevious}
        className={`${styles.arrow} ${styles.arrowLeft}`}
      />
      <img src={SLIDES[index]} alt="" className={styles.slide} />
      <img
        src="/picture/yingyechang/arrowRight.png"
        alt="Next slide"
        onClick={onNext}
        className={`${styles.arrow} ${styles.arrowRight}`}
      />
    </div>
  );
}

function SpaceCityTextPart() {
  const { language } = useLanguage();
  const viewportWidth = useViewportWidth();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const isMobile = viewportWidth <= 480;
  const stageScale = Math.min(1, viewportWidth / DESIGN_WIDTH);
  const scaledStageWidth = DESIGN_WIDTH * stageScale;
  const scaledStageHeight =
    STAGE_ANCHOR_Y + (STAGE_HEIGHT - STAGE_ANCHOR_Y) * stageScale;
  const headingLeft = isMobile ? 44 : Math.max(420, 585 * stageScale);
  const headingWidth = Math.max(0, Math.min(800, viewportWidth - headingLeft - 44));

  const previousSlide = () => {
    setSlideIndex((current) => (current - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setSlideIndex((current) => (current + 1) % SLIDES.length);
  };

  return (
    <main className={styles.page}>
      <section
        className={styles.heading}
        style={{ marginLeft: headingLeft, width: headingWidth }}
      >
        <h3
          className={styles.title}
          onClick={() => setIsDescriptionOpen((open) => !open)}
        >
          Space City: Art in the Age of Artemis
        </h3>
        <div
          className={`${styles.description} ${
            isDescriptionOpen ? styles.descriptionOpen : ""
          } ${language === "zh" ? "zh-font" : ""}`}
        >
          <ProjectDescription language={language} />
        </div>
      </section>

      <section
        className={styles.stageShell}
        style={{
          width: isMobile ? "100%" : scaledStageWidth,
          height: scaledStageHeight,
        }}
      >
        <div
          className={styles.stage}
          style={{ transform: `scale(${stageScale})` } as CSSProperties}
        >
          <div className={styles.heroPanel}>
            <div className={styles.heroContent}>
              <img
                src="/picture/SpaceCity/Space_1.JPG"
                alt="Space City: Art in the Age of Artemis exhibition poster"
                className={styles.poster}
              />
              <ProjectDetails language={language} />
            </div>
          </div>

          <ProjectCarousel
            index={slideIndex}
            onPrevious={previousSlide}
            onNext={nextSlide}
          />
        </div>
      </section>
    </main>
  );
}

export default SpaceCityTextPart;
