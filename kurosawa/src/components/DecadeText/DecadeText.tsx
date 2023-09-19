import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./DecadeText.module.css";

interface DecadeTextProps {
  children: React.ReactNode;
}

const DecadeText = ({ children }: DecadeTextProps) => {
  const [ref, isInView] = useInView({ threshold: 1 });

  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".line",
      { opacity: 0 },
      { duration: 1.8, opacity: 1, stagger: { amount: 0.4 } }
    );
    console.log("inView", isInView);
    return () => {
      tl.revert();
    };
  }, [isInView]);

  return (
    <div ref={ref} className={styles.textWrapper}>
      <p className={styles.decadeText}>{children}</p>
    </div>
  );
};

export default DecadeText;
