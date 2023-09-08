import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./NavBar.module.css"
import { linkFade, navbarScale } from "./NavBarAnim";

const NavBar = () => {
  const [earlyActive, setEarlyActive] = useState(false);
  return (
    <>
    <div className={styles.navbarWrapper}>
        <motion.div variants={navbarScale} initial="initial" animate="enter" exit="exit" className={styles.navbar}>
            <motion.div onMouseEnter={()=>setEarlyActive(true)} variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Early work's</motion.div>
            <motion.div variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>International Recognition</motion.div>
            <motion.div variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>In his Prime</motion.div>
            <motion.div variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Later years</motion.div>
        </motion.div>
        {/* early works */}
        <AnimatePresence mode="wait">
          {earlyActive && 
          <motion.div
            className={styles.early}
            onMouseLeave={()=>setEarlyActive(false)}
            ></motion.div>}
        </AnimatePresence>
    </div>
    </>
  )
}

export default NavBar