import { Link } from "react-router-dom";
import styles from "./footer.module.css";

interface PageFooterProps {
  goTo: string;
  nextTitle?: string;
}

const PageFooter = ({ goTo, nextTitle }: PageFooterProps) => {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerInner}>
        <div className={styles.titleNext}>
          <Link className={styles.link} to={goTo}>
            {nextTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
