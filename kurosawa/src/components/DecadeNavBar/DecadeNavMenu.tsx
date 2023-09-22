import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import styles from "./DNavBar.module.css";
import { menuBtn, navLink } from "./Anims";
import NavImage from "../NavImage/NavImage";

import strayDog from "../../images/NavVideo/strayDogCrop.mp4";
import sevenSam from "../../images/NavVideo/sevenSam.mp4";

const DecadeNavMenu = () => {
  const [home, setHome] = useState(false);
  const [early, setEarly] = useState(false);
  const [international, setInternational] = useState(false);
  const [great, setGreat] = useState(false);
  const [legacy, setLegacy] = useState(false);

  const activeWrap = (key: number) => {
    if (key === 0) return setHome(true);
    if (key === 1) return setEarly(true);
    if (key === 2) return setInternational(true);
    if (key === 3) return setGreat(true);
    if (key === 4) return setLegacy(true);
  };
  const inactiveWrap = (key: number) => {
    if (key === 0) return setHome(false);
    if (key === 1) return setEarly(false);
    if (key === 2) return setInternational(false);
    if (key === 3) return setGreat(false);
    if (key === 4) return setLegacy(false);
  };

  const links = [
    { title: "Home", url: "/" },
    { title: "Early Works", url: "/early" },
    { title: "International Success", url: "/international" },
    { title: "Greatness", url: "/greatness" },
    { title: "Legacy", url: "/legacy" },
  ];

  useEffect(() => {
    const linkAnim = gsap.fromTo(
      ".linkDiv",
      { yPercent: 100 },
      {
        duration: 1.3,
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
            <motion.div
              variants={navLink}
              exit="exit"
              className={`${styles.link} linkDiv`}
              onMouseEnter={() => activeWrap(index)}
              onMouseLeave={() => inactiveWrap(index)}
            >
              <a href={link.url} className="link">
                {link.title}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {home && <NavImage src={strayDog} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {early && <NavImage src={sevenSam} />}
      </AnimatePresence>

      {international && <div>international</div>}
      {great && <div>greatness</div>}
      {legacy && <div>Legacy</div>}
    </motion.div>
  );
};

export default DecadeNavMenu;
