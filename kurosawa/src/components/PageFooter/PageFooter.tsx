import { Link } from "react-router-dom";
import styles from "./footer.module.css";

interface PageFooterProps {
  goTo: string;
}

const PageFooter = ({ goTo }: PageFooterProps) => {
  return (
    <div className={styles.footerMain}>
      <Link to={goTo}>International Success</Link>
    </div>
  );
};

export default PageFooter;
