import { motion } from "framer-motion";
import styles from "./DNavBar.module.css";
import { menuBtn } from "./Anims";

const DecadeNavMenu = () => {
  return (
    <motion.div
      variants={menuBtn}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.navMenu}
    ></motion.div>
  );
};

export default DecadeNavMenu;
