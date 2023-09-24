import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import arrow from "../../images/Arrow.svg";
import highnLow from "../../images/highlow.webp";

interface PageFooterProps {
  goTo: string;
  nextTitle?: string;
}

const PageFooter = ({ goTo, nextTitle }: PageFooterProps) => {
  const [rightArrow, setRightArrow] = useState(false);

  return (
    <div className={styles.footerMain}>
      <div className={styles.footerInner}>
        <div className={styles.titleNext}>
          <div className={styles.imgTopWrapper}>
            <img className={rightArrow ? styles.imgHover : ""} src={highnLow} />
          </div>

          <div className={styles.imgWrapper}>
            <img
              className={rightArrow ? styles.imgPos : ""}
              src={arrow}
              alt="arrow pointing right"
            />
          </div>

          <Link
            onMouseEnter={() => setRightArrow(true)}
            onMouseLeave={() => setRightArrow(false)}
            className={styles.link}
            to={goTo}
          >
            {nextTitle}
          </Link>

          <div className={styles.imgBottWrapper}>
            <img className={rightArrow ? styles.imgHover : ""} src={highnLow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
