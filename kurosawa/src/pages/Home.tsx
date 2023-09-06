import { useState } from "react";
import styles from "./Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import highlow from "../images/highlow.webp";
import mada from "../images/madadayo.webp";
import seven from "../images/seven.webp";
import yojimbo from "../images/yojimbo.webp";
import ran from "../images/ran1.webp";
import { decadeImageFade } from "./HomeAnim";
import Menu from "../components/Menu";

const Home = () => {
    const [isFortiesActive, setIsFortiesActive] = useState(false);
    const [isFiftiesActive, setIsFiftiesActive] = useState(false);
    const [isSixtiesActive, setIsSixtiesActive] = useState(false);
    const [isRestActive, setIsRestActive] = useState(false);

  return (
    <div className={styles.pageBg}>
        <Menu />
        <div onMouseEnter={() => setIsFortiesActive(true)} onMouseLeave={() => setIsFortiesActive(false)} className={styles.fortiesSection}></div>
        <div onMouseEnter={() => setIsFiftiesActive(true)} onMouseLeave={() => setIsFiftiesActive(false)} className={styles.fiftiesSection}></div>
        <div onMouseEnter={() => setIsSixtiesActive(true)} onMouseLeave={() => setIsSixtiesActive(false)} className={styles.sixtiesSection}></div>
        <div onMouseEnter={() => setIsRestActive(true)} onMouseLeave={() => setIsRestActive(false)} className={styles.restOfSection}></div>
        
        <AnimatePresence mode="wait">
            {isFortiesActive &&
            <>
            <motion.div variants={decadeImageFade} initial="initial" animate="enter" exit="exit" className={styles.backgroundImage}><img src={seven}/></motion.div>
            <motion.h1 variants={decadeImageFade} initial="initial" animate="enter" exit="exit">40's</motion.h1>
            </>}
        </AnimatePresence>
            
            <AnimatePresence mode="wait">
                {isFiftiesActive &&
                <>
                    <motion.div variants={decadeImageFade} initial="initial" animate="enter" exit="exit" className={styles.backgroundImage}><img src={yojimbo}/></motion.div>
                    <motion.h1 variants={decadeImageFade} initial="initial" animate="enter" exit="exit">50's</motion.h1>
                </>}
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
                {isSixtiesActive &&
                <>
                    <motion.div variants={decadeImageFade} initial="initial" animate="enter" exit="exit" className={styles.backgroundImage}><img src={highlow}/></motion.div>
                    <motion.h1 variants={decadeImageFade} initial="initial" animate="enter" exit="exit">60's</motion.h1>
                </>}
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
                {isRestActive &&
                <>
                    <motion.div variants={decadeImageFade} initial="initial" animate="enter" exit="exit" className={styles.backgroundImage}><img src={mada}/></motion.div>
                    <motion.h1 variants={decadeImageFade} initial="initial" animate="enter" exit="exit">'70-98</motion.h1>
                </>}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {!isFortiesActive && !isFiftiesActive && !isSixtiesActive && !isRestActive && 
                <>
                    <motion.div variants={decadeImageFade} initial="initial" animate="enter" exit="exit" className={styles.backgroundImage}><img src={ran}/></motion.div>
                    <motion.h1 variants={decadeImageFade} initial="initial" animate="enter" exit="exit"></motion.h1>
                </>}
            </AnimatePresence>

    </div>

  )
}

export default Home;