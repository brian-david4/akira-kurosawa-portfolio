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
  const [intlActive, setIntlActive] = useState(false);
  const [greatActive, setGreatActive] = useState(false);
  const [laterActive, setLaterActive] = useState(false); 

  return (
    <>
    <div className={styles.navbarWrapper}>
        <motion.div variants={navbarScale} initial="initial" animate="enter" exit="exit" className={styles.navbar}>
            <motion.div onMouseEnter={()=>setEarlyActive(true)} onMouseLeave={()=>setEarlyActive(false)} variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Early work's</motion.div>
            <motion.div onMouseEnter={()=>setIntlActive(true)} onMouseLeave={()=>setIntlActive(false)} variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>International Recognition</motion.div>
            <motion.div onMouseEnter={()=>setGreatActive(true)} onMouseLeave={()=>setGreatActive(false)} variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Greatness</motion.div>
            <motion.div onMouseEnter={()=>setLaterActive(true)} onMouseLeave={()=>setLaterActive(false)} variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Later years</motion.div>
        </motion.div>

        {earlyActive && <img id={styles.early} className={styles.navLinkImage} src={early} alt="Stray Dog"/>}
        {intlActive && <img id={styles.intl} className={styles.navLinkImage} src={intl} alt="Yojimbo"/>}
        {greatActive && <img id={styles.great} className={styles.navLinkImage} src={great} alt="High and Low"/>}
        {laterActive && <img id={styles.later} className={styles.navLinkImage} src={later} alt="Madadayo"/>}
    </div>
    </>
  )
}

export default NavBar