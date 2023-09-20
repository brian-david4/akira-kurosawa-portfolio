import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { decadeImageFade } from "./HomeAnim";
import Menu from "../../components/Menu/Menu";
// images
import styles from "./Home.module.css";
import forty from "/1940.mp4";
import fifty from "/1950.mp4";
import rest from "/restFilm.mp4";
import sixty from "/1960.mp4";
import ran from "../../images/ran1.webp";
import HomeIntro from "../../components/HomeIntro/HomeIntro";

const Home = () => {
  const [isFortiesActive, setIsFortiesActive] = useState(false);
  const [isFiftiesActive, setIsFiftiesActive] = useState(false);
  const [isSixtiesActive, setIsSixtiesActive] = useState(false);
  const [isRestActive, setIsRestActive] = useState(false);

  const activeWrap = (key: number) => {
    if (key === 0)
      return (
        setIsFortiesActive(true),
        setIsFiftiesActive(false),
        setIsSixtiesActive(false),
        setIsRestActive(false)
      );
    if (key === 1)
      return (
        setIsFortiesActive(false),
        setIsFiftiesActive(true),
        setIsSixtiesActive(false),
        setIsRestActive(false)
      );
    if (key === 2)
      return (
        setIsFortiesActive(false),
        setIsFiftiesActive(false),
        setIsSixtiesActive(true),
        setIsRestActive(false)
      );
    if (key === 3)
      return (
        setIsFortiesActive(false),
        setIsFiftiesActive(false),
        setIsSixtiesActive(false),
        setIsRestActive(true)
      );
  };

  return (
    <>
      <HomeIntro />

      <div className={styles.pageBg}>
        <div className={styles.nameSignature}>Akira Kurosawa</div>
        <Menu />
        <div
          onMouseEnter={() => activeWrap(0)}
          className={styles.fortiesSection}
        ></div>
        <div
          onMouseEnter={() => activeWrap(1)}
          className={styles.fiftiesSection}
        ></div>
        <div
          onMouseEnter={() => activeWrap(2)}
          className={styles.sixtiesSection}
        ></div>
        <div
          onMouseEnter={() => activeWrap(3)}
          className={styles.restOfSection}
        ></div>
        {/* 1940's */}
        <AnimatePresence mode="wait">
          {isFortiesActive && (
            <>
              <motion.div
                variants={decadeImageFade}
                initial="initial"
                animate="enter"
                exit="exit"
                className={styles.backgroundImage}
              >
                <video
                  className={styles.fortyVideo}
                  autoPlay
                  playsInline
                  muted
                  loop
                  draggable="false"
                >
                  <source src={forty} />
                </video>
              </motion.div>
              <motion.h1
                className={styles.decadeTitle}
                variants={decadeImageFade}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                40's
              </motion.h1>
            </>
          )}
        </AnimatePresence>
        {/* 1950's */}
        <AnimatePresence mode="wait">
          {isFiftiesActive && (
            <>
              <div className={styles.backgroundImage}>
                <video
                  className={styles.fiftyVideo}
                  autoPlay
                  playsInline
                  muted
                  loop
                  draggable="false"
                >
                  <source src={fifty} />
                </video>
              </div>
              <motion.h1
                className={styles.decadeTitle}
                variants={decadeImageFade}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                50's
              </motion.h1>
            </>
          )}
        </AnimatePresence>
        {/* 1960's */}
        <AnimatePresence mode="wait">
          {isSixtiesActive && (
            <>
              <div className={styles.backgroundImage}>
                <video
                  className={styles.sixtyVideo}
                  autoPlay
                  playsInline
                  muted
                  loop
                  draggable="false"
                >
                  <source src={sixty} />
                </video>
              </div>
              <motion.h1
                className={styles.decadeTitle}
                variants={decadeImageFade}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                60's
              </motion.h1>
            </>
          )}
        </AnimatePresence>
        {/* rest */}
        <AnimatePresence mode="wait">
          {isRestActive && (
            <>
              <motion.div
                variants={decadeImageFade}
                initial="initial"
                animate="enter"
                exit="exit"
                className={styles.backgroundImage}
              >
                <video
                  className={styles.restVideo}
                  autoPlay
                  playsInline
                  muted
                  loop
                  draggable="false"
                >
                  <source src={rest} />
                </video>
              </motion.div>
              <motion.h1
                className={styles.decadeTitle}
                variants={decadeImageFade}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                '70-98
              </motion.h1>
            </>
          )}
        </AnimatePresence>
        {/* default pic */}
        <AnimatePresence mode="wait">
          {!isFortiesActive &&
            !isFiftiesActive &&
            !isSixtiesActive &&
            !isRestActive && (
              <>
                <motion.div
                  variants={decadeImageFade}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className={styles.backgroundImage}
                >
                  <img src={ran} />
                </motion.div>
                <motion.h1
                  variants={decadeImageFade}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                ></motion.h1>
              </>
            )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
