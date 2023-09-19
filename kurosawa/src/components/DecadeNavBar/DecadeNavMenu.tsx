import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect } from "react";
import styles from "./DNavBar.module.css";
import { menuBtn } from "./Anims";

const DecadeNavMenu = () => {
  const links = [
    "Home",
    "Early Works",
    "International Success",
    "Greatness",
    "Legacy",
  ];

  useEffect(() => {
    const linkAnim = gsap.fromTo(
      ".linkDiv",
      { yPercent: 100 },
      {
        duration: 0.9,
        yPercent: 0,
        ease: "power2.inOut",
        delay: 0.7,
        stagger: { amount: 0.2 },
      }
    );

    return () => {
      linkAnim.revert();
    };
  }, []);

  return (
    <motion.div
      variants={menuBtn}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.navMenu}
    >
      <div className={styles.linksContainer}>
        {links.map((link, index) => (
          <div key={index} className={styles.linkWrapper}>
            <div className={`${styles.link} linkDiv`}>
              <motion.a href="/" className="link">
                {link}
              </motion.a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DecadeNavMenu;
