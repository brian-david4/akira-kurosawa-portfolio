import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./KName.module.css";

const KurosawaName = () => {
  useEffect(() => {
    gsap.fromTo(
      ".ltr",
      { yPercent: -175 },
      {
        duration: 0.8,
        yPercent: 0,
        stagger: { amount: 0.6 },
        ease: "power1.out",
      }
    );
  });

  return (
    <div className={styles.nameStyle}>
      <span className={`${styles.ltr} ltr`}>K</span>
      <span className={`${styles.ltr} ltr`}>u</span>
      <span className={`${styles.ltr} ltr`}>r</span>
      <span className={`${styles.ltr} ltr`}>o</span>
      <span className={`${styles.ltr} ltr`}>s</span>
      <span className={`${styles.ltr} ltr`}>a</span>
      <span className={`${styles.ltr} ltr`}>w</span>
      <span className={`${styles.ltr} ltr`}>a</span>
    </div>
  );
};

export default KurosawaName;
