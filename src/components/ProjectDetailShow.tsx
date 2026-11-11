import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./ProjectDetailShow.module.css";

type ProjectDetailShowProps = {
  language: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode | ((state: ProjectDetailStageState) => ReactNode);
  designHeight: number;
  designWidth?: number;
  anchorY?: number;
  stageGutter?: number;
  mobileBreakpoint?: number;
  headingLeft?: number;
  headingMinLeft?: number;
  headingWidth?: number;
  sidePadding?: number;
  className?: string;
  stageClassName?: string;
};

type ProjectDetailStageState = {
  scale: number;
  isMobile: boolean;
  availableWidth: number;
};

type ProjectSlide =
  | string
  | {
      src: string;
      alt?: string;
    };

type ProjectDetailCarouselProps = {
  slides: ProjectSlide[];
  height?: number;
  marginTop?: number;
  className?: string;
  imageClassName?: string;
  previousArrow?: string;
  nextArrow?: string;
};

function useContainerWidth<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidth = () => setWidth(container.clientWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return { containerRef, width };
}

function ProjectDetailShow({
  language,
  title,
  description,
  children,
  designHeight,
  designWidth = 1920,
  anchorY = 70,
  stageGutter = 0,
  mobileBreakpoint = 480,
  headingLeft = 585,
  headingMinLeft = 420,
  headingWidth = 800,
  sidePadding = 44,
  className = "",
  stageClassName = "",
}: ProjectDetailShowProps) {
  const { containerRef, width: availableWidth } =
    useContainerWidth<HTMLElement>();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const isMobile = availableWidth <= mobileBreakpoint;
  const stageAvailableWidth = isMobile
    ? availableWidth
    : Math.max(0, availableWidth - stageGutter * 2);
  const scale = Math.min(1, stageAvailableWidth / designWidth);
  const scaledWidth = designWidth * scale;
  const scaledHeight = anchorY + (designHeight - anchorY) * scale;
  const resolvedHeadingLeft = isMobile
    ? sidePadding
    : Math.max(headingMinLeft, headingLeft * scale);
  const resolvedHeadingWidth = Math.max(
    0,
    Math.min(
      headingWidth,
      availableWidth - resolvedHeadingLeft - sidePadding,
    ),
  );
  const toggleDescription = () => {
    if (description) setIsDescriptionOpen((open) => !open);
  };
  const stageContent =
    typeof children === "function"
      ? children({ scale, isMobile, availableWidth })
      : children;

  return (
    <main
      ref={containerRef}
      className={`${styles.page} ${className}`.trim()}
    >
      <section
        className={styles.heading}
        style={{
          marginLeft: resolvedHeadingLeft,
          width: resolvedHeadingWidth,
        }}
      >
        <h3
          className={`${styles.title} ${
            description ? styles.interactiveTitle : ""
          }`}
          onClick={toggleDescription}
          onKeyDown={(event) => {
            if (
              description &&
              (event.key === "Enter" || event.key === " ")
            ) {
              event.preventDefault();
              toggleDescription();
            }
          }}
          role={description ? "button" : undefined}
          tabIndex={description ? 0 : undefined}
          aria-expanded={description ? isDescriptionOpen : undefined}
        >
          {title}
        </h3>

        {description ? (
          <div
            className={`${styles.description} ${
              isDescriptionOpen ? styles.descriptionOpen : ""
            } ${language === "zh" ? "zh-font" : ""}`}
          >
            {description}
          </div>
        ) : null}
      </section>

      <section
        className={styles.stageShell}
        style={{
          width: isMobile ? "100%" : scaledWidth,
          height: isMobile ? "auto" : scaledHeight,
        }}
      >
        <div
          className={`${styles.stage} ${stageClassName}`.trim()}
          style={
            {
              width: isMobile ? "100%" : designWidth,
              height: isMobile ? "auto" : designHeight,
              transform: isMobile ? "none" : `scale(${scale})`,
              transformOrigin: `left ${anchorY}px`,
            } as CSSProperties
          }
        >
          {stageContent}
        </div>
      </section>
    </main>
  );
}

function ProjectDetailCarousel({
  slides,
  height = 800,
  marginTop = 80,
  className = "",
  imageClassName = "",
  previousArrow = "/picture/yingyechang/arrowLeft.png",
  nextArrow = "/picture/yingyechang/arrowRight.png",
}: ProjectDetailCarouselProps) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  const previous = () => {
    setIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setIndex((current) => (current + 1) % slides.length);
  };

  const currentSlide = slides[index];
  const source =
    typeof currentSlide === "string" ? currentSlide : currentSlide.src;
  const alt = typeof currentSlide === "string" ? "" : currentSlide.alt ?? "";

  return (
    <div
      className={`${styles.carousel} ${className}`.trim()}
      style={{ height, marginTop }}
    >
      <button
        type="button"
        className={`${styles.arrowButton} ${styles.previousButton}`}
        onClick={previous}
        aria-label="Previous image"
      >
        <img src={previousArrow} alt="" />
      </button>

      <img
        src={source}
        alt={alt}
        className={`${styles.slide} ${imageClassName}`.trim()}
      />

      <button
        type="button"
        className={`${styles.arrowButton} ${styles.nextButton}`}
        onClick={next}
        aria-label="Next image"
      >
        <img src={nextArrow} alt="" />
      </button>
    </div>
  );
}

export { ProjectDetailCarousel };
export type { ProjectDetailStageState };
export default ProjectDetailShow;
