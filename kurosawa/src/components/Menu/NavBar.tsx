import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { linkFade, navbarScale } from "./NavBarAnim";

const NavBar = () => {

  return (
    <>
      <div className={styles.navbarWrapper}>
        <motion.div
          variants={navbarScale}
          initial="initial"
          animate="enter"
          exit="exit"
          className={styles.navbar}
        >
          <motion.div
            variants={linkFade}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.navbarLink}
          >
            <Link to="/early">Early Works</Link>
          </motion.div>
          <motion.div
            variants={linkFade}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.navbarLink}
          >
            <Link to="/international">International Success</Link>
          </motion.div>
          <motion.div
            variants={linkFade}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.navbarLink}
          >
            <Link to="/greatness">Greatness</Link>
          </motion.div>
          <motion.div
            variants={linkFade}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.navbarLink}
          >
            <Link to="/legacy">Legacy</Link>
          </motion.div>
        </motion.div>

      </div>
    </>
  );
};

export default NavBar;
