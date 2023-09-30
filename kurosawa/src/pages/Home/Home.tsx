import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Menu from "../../components/Menu/Menu";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import HomeVideo from "../../components/HomeVideo/HomeVideo";
// images
import styles from "./Home.module.css";
import forty from "/1940.mp4";
import fifty from "/1950.mp4";
import rest from "/restFilm.mp4";
import sixty from "/1960.mp4";

const Home = () => {
  const [isFortiesActive, setIsFortiesActive] = useState(false);
  const [isFiftiesActive, setIsFiftiesActive] = useState(false);
  const [isSixtiesActive, setIsSixtiesActive] = useState(false);
  const [isRestActive, setIsRestActive] = useState(false);

  const [isIntroPlaying, setIntroPlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroPlay(false);
    }, 9500);
    return () => clearTimeout(timer);
  }, []);

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
      <AnimatePresence mode="wait">
        {isIntroPlaying && <HomeIntro />}
      </AnimatePresence>

      <div className={styles.pageBg}>
        {/* invisible divs */}
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
            <HomeVideo decade="40's" src={forty} id="fortyVideo" />
          )}
        </AnimatePresence>

        {/* 1950's */}
        <AnimatePresence mode="wait">
          {isFiftiesActive && (
            <HomeVideo decade="50's" src={fifty} id="fiftyVideo" />
          )}
        </AnimatePresence>

        {/* 1960's */}
        <AnimatePresence mode="wait">
          {isSixtiesActive && (
            <HomeVideo decade="60's" src={sixty} id="sixtyVideo" />
          )}
        </AnimatePresence>

        {/* rest */}
        <AnimatePresence mode="wait">
          {isRestActive && (
            <HomeVideo decade="'70-98" src={rest} id="restVideo" />
          )}
        </AnimatePresence>

        {/* default pic */}
        <AnimatePresence mode="wait">
          {!isFortiesActive &&
            !isFiftiesActive &&
            !isSixtiesActive &&
            !isRestActive && (
              <HomeVideo decade="'70-98" src={rest} id="restVideo" />
            )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
