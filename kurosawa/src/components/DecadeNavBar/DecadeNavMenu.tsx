import { motion } from "framer-motion";
import styles from "./DNavBar.module.css";
import { menuBtn } from "./Anims";

import strayDog from "../../images/NavVideo/strayDogCrop.mp4";
import sevenSam from "../../images/NavVideo/sevenSam.mp4";
import highnLow from "../../images/NavVideo/highLow.mp4";
import dreamVid from "../../images/NavVideo/dreamVid.mp4";
import waterWhl from "../../images/NavVideo/waterWhl.mp4";
import DecadeNavLink from "../DecadeNavLink/DecadeNavLink";

const DecadeNavMenu = () => {
  const links: PageLinkType[] = [
    { title: "Home", url: "/", vidSrc: waterWhl },
    { title: "Early Works", url: "/early", vidSrc: strayDog },
    { title: "International Success", url: "/international", vidSrc: sevenSam },
    { title: "Greatness", url: "/greatness", vidSrc: highnLow },
    { title: "Legacy", url: "/legacy", vidSrc: dreamVid },
  ];

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
          <DecadeNavLink key={`nvL_${index}`} link={link} />
        ))}
      </div>
    </motion.div>
  );
};

export default DecadeNavMenu;
