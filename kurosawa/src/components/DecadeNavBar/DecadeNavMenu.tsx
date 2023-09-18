import { motion } from "framer-motion";
import styles from "./DNavBar.module.css";
import { menuBtn } from "./Anims";
import { Link } from "react-router-dom";

const DecadeNavMenu = () => {
  const links = [
    "Home",
    "Early Works",
    "International Success",
    "Greatness",
    "Later Years",
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
          <div className={styles.link} key={index}>
            <Link to="/">{link}</Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DecadeNavMenu;
