import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import useMousePosition from "../../hooks/useMousePosition";
import arrow from "../../images/Arrow.svg";
import highnLow from "../../images/highlow.webp";

interface PageFooterProps {
  goTo: string;
  nextTitle?: string;
}

const PageFooter = ({ goTo, nextTitle }: PageFooterProps) => {
  const { x, y } = useMousePosition();
  const size = 10;
  const [rightArrow, setRightArrow] = useState(false);

  return (
    <div className={styles.footerMain}>
      <motion.div
        animate={{ left: `calc(${x}px - ${size}vh)` }}
        transition={{ type: "tween", ease: "backOut" }}
        className={styles.imgTopWrapper}
      >
        <img className={rightArrow ? styles.imgOpacity : ""} src={highnLow} />
      </motion.div>

      <div className={styles.linkWrapper}>
        <Link
          onMouseEnter={() => setRightArrow(true)}
          onMouseLeave={() => setRightArrow(false)}
          className={styles.link}
          to={goTo}
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
          className={rightArrow ? styles.imgOpacity : ""}
          style={{ transitionDelay: "0.2s" }}
          src={highnLow}
        />
      </motion.div>
    </div>
  );
};

export default PageFooter;
