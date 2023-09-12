import { useState } from "react";
import {  motion } from "framer-motion";
import styles from "./NavBar.module.css"
import { linkFade, navbarScale } from "./NavBarAnim";
import early from "../images/straydog.webp";
import intl from "../images/yojimbo.webp";
import great from "../images/highlow.webp";
import later from "../images/madadayo.webp";

const NavBar = () => {
  const [earlyActive, setEarlyActive] = useState(false); 

  return (
    <>
    <div className={styles.navbarWrapper}>
        <motion.div variants={navbarScale} initial="initial" animate="enter" exit="exit" className={styles.navbar}>
            <motion.div onMouseEnter={()=>setEarlyActive(true)} onMouseLeave={()=>setEarlyActive(false)} variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Early work's</motion.div>
            <motion.div variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>International Recognition</motion.div>
            <motion.div variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Greatness</motion.div>
            <motion.div variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Later years</motion.div>
        </motion.div>

        {earlyActive && <img className={styles.navLinkImage} src={early} alt="Stray Dog"/>}
    </div>
    </>
  )
}

export default NavBar