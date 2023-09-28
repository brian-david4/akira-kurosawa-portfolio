import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import styles from "./HomeIntro.module.css";
import portrait from "../../images/Kurosawa-Akira-portrait.webp";
import { blockAnim } from "./Anim";

const HomeIntro = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".nameEn",
      { opacity: 0.7 },
      { duration: 1.5, opacity: 0, delay: 1 }
    )
      .fromTo(".nameJp", { opacity: 0 }, { duration: 1.5, opacity: 0.7 })
      .to(".nameJp", { autoAlpha: 0, duration: 1.5, delay: 1 })
      .to(".imgPortrait", { duration: 1.5, opacity: 1 });
  }, []);

  return (
    <motion.div
      variants={blockAnim}
      initial="initial"
      exit="exit"
      className={styles.block}
    >
      <div className={`${styles.imgPortrait} imgPortrait`}>
        <img
          draggable="false"
          src={portrait}
          alt="Headshot of Akira Kurosawa"
        />
      </div>
      <div className={styles.name}>
        <div className={`${styles.nameEn} nameEn`}>
          <h1>akira</h1>
          <h1>kurosawa</h1>
        </div>
        <div className={`${styles.nameJp} nameJp`}>
          <h1>黒沢明</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeIntro;
