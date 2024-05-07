import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import styles from "./marquee.module.css";

const Marquee = () => {
  const arr = new Array(20);

  const xTranslate = useMotionValue(0);
  const [ref, { width }] = useMeasure();

  useEffect(() => {
    let controls;
    let finPosition = -width / 2 - 16;
    controls = animate(xTranslate, [0, finPosition], {
      ease: "linear",
      duration: 35,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [xTranslate, width]);

  return (
    <motion.div style={{ x: xTranslate }} ref={ref} className={styles.marquee}>
      {[...arr, ...arr].map((_, idx) => {
        return idx % 2 === 0 ? (
          <div
            data-lang="en"
            key={`marq_${idx}`}
            className={styles.marqueeItem}
          >
            Kurosawa
          </div>
        ) : (
          <div
            data-lang="jp"
            key={`marq_${idx}`}
            className={styles.marqueeItem}
          >
            黒澤明
          </div>
        );
      })}
    </motion.div>
  );
};

export default Marquee;
