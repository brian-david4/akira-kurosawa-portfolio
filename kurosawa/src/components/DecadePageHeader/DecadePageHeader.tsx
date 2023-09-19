import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./DecadeHeader.module.css";

interface DecadePageHeaderProps {
  children: React.ReactNode;
}

const DecadePageHeader = ({ children }: DecadePageHeaderProps) => {
  useEffect(() => {
    gsap.fromTo(
      ".decadeTitle",
      { yPercent: 100 },
      { duration: 2, yPercent: 0, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div className={styles.titleWrapper}>
      <div className={`${styles.nameTitle} decadeTitle`}>{children}</div>
    </div>
  );
};

export default DecadePageHeader;
