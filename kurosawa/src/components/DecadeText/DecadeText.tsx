import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./DecadeText.module.css";

interface DecadeTextProps {
  children: React.ReactNode;
}

const DecadeText = ({ children }: DecadeTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    const tween = gsap.fromTo(
      ".line",
      { opacity: 0 },
      { duration: 1.8, opacity: 1, stagger: { amount: 0.4 } }
    );

    return () => {
      tween.revert();
    };
  }, [isInView]);

  return (
    <p ref={ref} className={styles.decadeText}>
      {children}
    </p>
  );
};

export default DecadeText;
