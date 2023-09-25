import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import useMousePosition from "../../hooks/useMousePosition";
import arrow from "../../images/Arrow.svg";

interface PageFooterProps {
  goToPrevious: string;
  goToNext: string;
  nextTitle: string;
  previousTitle: string;
  footerRef: any;
  srcNext: string;
  srcPrevious: string;
}

const PageFooter = ({
  goToNext,
  goToPrevious,
  nextTitle,
  previousTitle,
  srcNext,
  srcPrevious,
  footerRef,
}: PageFooterProps) => {
  const { x } = useMousePosition();
  const size = 10;

  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);

  return (
    <div ref={footerRef} className={styles.footerMain}>
      {/* Left Side */}

      {/* linkLeft */}
      <div className={styles.linkWrapperLeft}>
        <Link
          onMouseEnter={() => setLeftArrow(true)}
          onMouseLeave={() => setLeftArrow(false)}
          className={styles.linkLeft}
          to={goToPrevious}
        >
          {previousTitle}
        </Link>
      </div>

      <motion.div
        animate={{ left: `calc(${x}px - ${size}vh)` }}
        transition={{ type: "tween", ease: "backOut" }}
        className={styles.imgBottWrapper}
      >
        <img
          draggable={false}
          className={leftArrow ? styles.imgOpacityLeft : ""}
          src={srcPrevious}
        />
      </motion.div>

      {/* arrow */}
      <div className={styles.arrow}>
        <img
          draggable={false}
          src={arrow}
          data-arrow-left={leftArrow}
          data-arrow-right={rightArrow}
        />
      </div>
      {/* Right Side */}

      <div className={styles.linkWrapperRight}>
        <Link
          onMouseEnter={() => setRightArrow(true)}
          onMouseLeave={() => setRightArrow(false)}
          className={styles.link}
          to={goToNext}
        >
          {nextTitle}
        </Link>
      </div>

      <motion.div
        animate={{ left: `calc(${x}px - ${size}vh)` }}
        transition={{ type: "tween", ease: "backOut" }}
        className={styles.imgBottWrapper}
      >
        <img
          draggable={false}
          className={rightArrow ? styles.imgOpacityRight : ""}
          style={{ transitionDelay: "0.2s" }}
          src={srcNext}
        />
      </motion.div>
    </div>
  );
};

export default PageFooter;
