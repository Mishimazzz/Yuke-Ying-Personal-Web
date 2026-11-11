import { useEffect, useState, type CSSProperties } from "react";
import { useLanguage } from "../components/LanguageContext";
import "./yycTextPart.css";

const DESIGN_WIDTH = 1920;
const DESKTOP_GUTTER = 44;
const STAGE_ANCHOR_Y = 180;
const STAGE_HEIGHT = 4034;
const SLIDES = Array.from(
  { length: 13 },
  (_, index) => `/picture/yingyechang/yyc_${index + 3}.png`,
);

type CssVariables = CSSProperties & Record<`--${string}`, string>;

function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  return viewportWidth;
}

function createImageStyle(
  x: string,
  rotation: string,
  scale: string,
  top: string,
): CssVariables {
  return {
    "--x": x,
    "--rotate": rotation,
    "--scale": scale,
    "--top": top,
  };
}

function ProjectDescription({ language }: { language: string }) {
  if (language === "zh") {
    return (
      <p className="yyc-copy yyc-copy-zh">
        <br />
        《应业長》（
        <span className="yyc-copy-project-name">Everlasting Good Karma</span>
        ）是一本为我年届八十五岁的爷爷应业长先生设计并制作的自传书。过去两年里，他亲笔写下万字回忆，并整理了一生的旧照片，试图留下一些可以流传的、能够证明自己存在的、比肉身相对更永恒的东西。
        <br />
        <br />
        全书分为文字与图像两部分。文字部分按时间顺序讲述他丰富的工作经历，背景暗藏他年老后的各式病症处方。我走访并拍摄了他曾经生活、工作过的地点——大多已废弃或被改建，这些照片也作为文字部分的背景补充。
        <br />
        <br />
        图像部分则收录了他自己拍摄或被拍摄的旧照片，并以倒叙方式编排，从晚年回望青年，呈现出他在不同阶段的容貌、处境以及陪伴在他身边的人。
      </p>
    );
  }

  return (
    <p className="yyc-copy yyc-copy-en">
      <br />
      <span className="yyc-copy-project-name">Everlasting Good Karma </span>
      is a memoir designed and produced for my grandfather,
      <span className="yyc-copy-person-name"> 应业长</span>, at the age of 85.
      Over the past two years, he handwrote tens of thousands of words reflecting
      on his life, and carefully compiled a collection of old photographs—hoping
      to leave behind something more enduring than the body itself, something
      that could mark his presence beyond time.
      <br />
      <br />
      The book is divided into two parts: text and images. The written section
      presents a chronological narrative of his working life, with subtle
      references to the illnesses and prescriptions that have accompanied his
      old age. To accompany the text, I revisited and photographed the homes and
      workplaces he once inhabited—many of which are now abandoned or
      transformed. The image section consists of old photographs taken
      throughout his life. Arranged in reverse chronological order, they trace
      his appearance, circumstances, and companions—from the present day back to
      his youth.
    </p>
  );
}

function ProjectSpecs({ language }: { language: string }) {
  if (language === "zh") {
    return (
      <p className="yyc-specs yyc-specs-zh">
        尺寸：<span className="yyc-specs-latin">142 × 210 mm</span>
        <br />
        页数：<span className="yyc-specs-latin">304</span>页
        <br />
        首版：<span className="yyc-specs-latin">200</span>份
        <br />
        仅赠亲友阅读，无商业意图。
      </p>
    );
  }

  return (
    <p className="yyc-specs yyc-specs-en">
      Size: 142 × 210 mm
      <br />
      Page count: 304 pages
      <br />
      First edition: 200 copies
      <br />
      For reading only, not for sale.
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
    <div className="yyc-slider">
      <img
        src="/picture/yingyechang/arrowLeft.png"
        alt="Previous slide"
        onClick={onPrevious}
        className="yyc-arrow yyc-arrow-left"
      />
      <img src={SLIDES[index]} alt="" className="yyc-slide" />
      <img
        src="/picture/yingyechang/arrowRight.png"
        alt="Next slide"
        onClick={onNext}
        className="yyc-arrow yyc-arrow-right"
      />
    </div>
  );
}

function YycTextPart() {
  const { language } = useLanguage();
  const viewportWidth = useViewportWidth();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const isMobile = viewportWidth <= 480;
  const availableStageWidth = isMobile
    ? viewportWidth
    : Math.max(0, viewportWidth - DESKTOP_GUTTER * 2);
  const stageScale = Math.min(1, availableStageWidth / DESIGN_WIDTH);
  const scaledStageWidth = DESIGN_WIDTH * stageScale;
  const scaledStageHeight =
    STAGE_ANCHOR_Y + (STAGE_HEIGHT - STAGE_ANCHOR_Y) * stageScale;
  const headingLeft = isMobile ? DESKTOP_GUTTER : Math.max(420, 585 * stageScale);
  const headingWidth = Math.max(
    0,
    Math.min(800, viewportWidth - headingLeft - DESKTOP_GUTTER),
  );

  const previousSlide = () => {
    setSlideIndex((current) => (current - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setSlideIndex((current) => (current + 1) % SLIDES.length);
  };

  const stageStyle: CssVariables = {
    transform: `scale(${stageScale})`,
    "--spec-counter-scale": `${1 / stageScale}`,
  };

  return (
    <main className="yyc-page">
      <section
        className="yyc-heading"
        style={{ marginLeft: headingLeft, width: headingWidth }}
      >
        <h3
          className="yyc-title"
          onClick={() => setIsDescriptionOpen((open) => !open)}
        >
          {language === "zh" ? <span className="zh-font">应业長</span> : "Everlasting Good Karma"}
        </h3>
        <div
          className={`yyc-description ${
            isDescriptionOpen ? "yyc-description-open" : ""
          } ${language === "zh" ? "zh-font" : ""}`}
        >
          <ProjectDescription language={language} />
        </div>
      </section>

      <section
        className="yyc-stage-shell"
        style={{
          width: isMobile ? "100%" : scaledStageWidth,
          height: scaledStageHeight,
        }}
      >
        <div className="yyc-stage" style={stageStyle}>
          <div className="yyc-hero-panel">
            <div className="yyc-hero-content">
              <img
                src="/picture/yingyechang/yyc_1.png"
                alt=""
                className="yyc-image"
                style={createImageStyle(
                  "-490px",
                  "10deg",
                  "1.5",
                  `${STAGE_ANCHOR_Y}px`,
                )}
              />
              <ProjectSpecs language={language} />
              <img
                src="/picture/yingyechang/yyc_2.png"
                alt=""
                className="yyc-image"
                style={createImageStyle("220px", "0deg", "1.6", "0px")}
              />
            </div>
          </div>

          <ProjectCarousel
            index={slideIndex}
            onPrevious={previousSlide}
            onNext={nextSlide}
          />

          <div className="yyc-bottom-image">
            <img src="/picture/yingyechang/yyc_17.jpg" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default YycTextPart;
