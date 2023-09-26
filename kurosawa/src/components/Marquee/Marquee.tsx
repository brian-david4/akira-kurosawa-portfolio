import { useEffect } from "react";
import styles from "./marquee.module.css";
import gsap from "gsap";

const Marquee = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".marquee-inner", {
      duration: 10,
      xPercent: -100,
      ease: "linear",
    }).set(".marquee-inner", { xPercent: 0 });

    tl.repeat(-1);
    return () => {
      tl.revert();
    };
  }, []);

  return (
    <div className={styles.marquee}>
      <div className={`${styles.marqueeInner} marquee-inner`}>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
      </div>
      <div className={`${styles.marqueeInner} marquee-inner`}>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
        <div data-lang="en" className={styles.marqueeItem}>
          kurosawa
        </div>
        <div data-lang="jp" className={styles.marqueeItem}>
          黒澤明
        </div>
      </div>
    </div>
  );
};

export default Marquee;
