import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./NavBar.module.css"
import { linkFade, navLinkMenuAnim, navbarScale } from "./NavBarAnim";

const NavBar = () => {
  const [earlyActive, setEarlyActive] = useState(false);
  const [intlActive, setIntlActive] = useState(false);
  const [greatActive, setGreatActive] = useState(false);
  const [legacyActive, setLegacyActive] = useState(false);

  return (
    <>
    <div className={styles.navbarWrapper}>
        <motion.div variants={navbarScale} initial="initial" animate="enter" exit="exit" className={styles.navbar}>
            <motion.div onMouseEnter={()=>setEarlyActive(true)} variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Early work's</motion.div>
            <motion.div onMouseEnter={()=>setIntlActive(true)} variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>International Recognition</motion.div>
            <motion.div onMouseEnter={()=>setGreatActive(true)} variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Greatness</motion.div>
            <motion.div onMouseEnter={()=>setLegacyActive(true)} variants={linkFade} initial="initial" animate="enter" exit="exit" className={styles.navbarLink}>Later years</motion.div>
        </motion.div>

        {/* early works */}
        <AnimatePresence mode="wait">
          {earlyActive && 
          <motion.div
            className={styles.navLinkMenu} id={styles.early} 
            onMouseLeave={()=>setEarlyActive(false)}
            variants={navLinkMenuAnim} initial="initial" animate="enter" exit="exit"></motion.div>}
        </AnimatePresence>
            {/* International recog */}
        <AnimatePresence mode="wait">
          {intlActive && 
          <motion.div
            className={styles.navLinkMenu} id={styles.intl} 
            onMouseLeave={()=>setIntlActive(false)}
            variants={navLinkMenuAnim} initial="initial" animate="enter" exit="exit"></motion.div>}
        </AnimatePresence>
            {/* greatness */}
        <AnimatePresence mode="wait">
          {greatActive && 
          <motion.div
            className={styles.navLinkMenu} id={styles.great} 
            onMouseLeave={()=>setGreatActive(false)}
            variants={navLinkMenuAnim} initial="initial" animate="enter" exit="exit"></motion.div>}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {legacyActive && 
          <motion.div
            className={styles.navLinkMenu} id={styles.legacy} 
            onMouseLeave={()=>setLegacyActive(false)}
            variants={navLinkMenuAnim} initial="initial" animate="enter" exit="exit"></motion.div>}
        </AnimatePresence>

    </div>
    </>
  )
}

export default NavBar