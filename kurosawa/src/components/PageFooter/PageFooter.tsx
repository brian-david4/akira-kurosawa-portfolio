import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import useMousePosition from "../../hooks/useMousePosition";
// import arrow from "../../images/Arrow.svg";
import highnLow from "../../images/highlow.webp";

interface PageFooterProps {
  goToPrevious: string;
  goToNext: string;
  nextTitle: string;
  previousTitle: string;
}

const PageFooter = ({
  goToNext,
  goToPrevious,
  nextTitle,
  previousTitle,
}: PageFooterProps) => {
  const { x } = useMousePosition();
  const size = 10;

  const [rightArrow, setRightArrow] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);

  return (
    <div className={styles.footerMain}>
      {/* Left Side */}
      <motion.div
        animate={{ left: `calc(${x}px - ${size}vh)` }}
        transition={{ type: "tween", ease: "backOut" }}
        className={styles.imgTopWrapper}
      >
        <img
          className={leftArrow ? styles.imgOpacityLeft : ""}
          src={highnLow}
        />
      </motion.div>
      {/* linkLeft */}
      <div className={styles.linkWrapperLeft}>
        <Link
          onMouseEnter={() => setLeftArrow(true)}
          onMouseLeave={() => setLeftArrow(false)}
          className={styles.link}
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
          className={leftArrow ? styles.imgOpacityLeft : ""}
          src={highnLow}
        />
      </motion.div>

      {/* Right Side */}
      <motion.div
        animate={{ left: `calc(${x}px - ${size}vh)` }}
        transition={{ type: "tween", ease: "backOut" }}
        className={styles.imgTopWrapper}
      >
        <img
          className={rightArrow ? styles.imgOpacityRight : ""}
          src={highnLow}
        />
      </motion.div>

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
          className={rightArrow ? styles.imgOpacityRight : ""}
          style={{ transitionDelay: "0.2s" }}
          src={highnLow}
        />
      </motion.div>
    </div>
  );
};

export default PageFooter;
