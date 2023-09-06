import { motion } from "framer-motion";
import styles from "./NavBar.module.css"
import { linkFade, navbarScale } from "./NavBarAnim";

const NavBar = () => {
  return (
    <>
    <div className={styles.navbarWrapper}>
        <motion.div variants={navbarScale} initial="initial" animate="enter" exit="exit" className={styles.navbar}>
            <motion.div variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Early work's</motion.div>
            <motion.div variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>International Success</motion.div>
            <motion.div variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>In his Prime</motion.div>
            <motion.div variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Later years</motion.div>
        </motion.div>
    </div>
    </>
  )
}

export default NavBar