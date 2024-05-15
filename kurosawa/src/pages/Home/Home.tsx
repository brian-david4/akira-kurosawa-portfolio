import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Menu from "../../components/Menu/Menu";
import HomeIntro from "../../components/HomeIntro/HomeIntro";
import HomeVideo from "../../components/HomeVideo/HomeVideo";
// images
import styles from "./Home.module.css";
import forty from "/1940.mp4";
import fifty from "/1950.mp4";
import sixty from "/1960.mp4";
import rest from "/restFilm.mp4";

interface HomePageProps {
  isIntroPlaying: boolean;
}

const Home = ({ isIntroPlaying }: HomePageProps) => {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
      console.log(window.innerWidth);
    });

    return () => window.removeEventListener("resize", () => setScreenWidth(0));
  }, []);

  const [decadeActive, setDecadeActive] = useState<IndexActiveType>({
    index: 3,
    isActive: true,
  });

  const videos: VideoType[] = [
    { decadeTitle: "40's", src: forty, id: "fortyVideo" },
    { decadeTitle: "50's", src: fifty, id: "fiftyVideo" },
    { decadeTitle: "60's", src: sixty, id: "sixtyVideo" },
    { decadeTitle: "'70-98", src: rest, id: "restVideo" },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isIntroPlaying && <HomeIntro />}
      </AnimatePresence>

      <div className={styles.pageBg}>
        {/* invisible divs */}
        <Menu screenWidth={screenWidth} />
        <div className={styles.nameSignature}>Akira Kurosawa</div>
        <div
          onMouseEnter={() => setDecadeActive({ index: 0, isActive: true })}
          className={styles.fortiesSection}
        ></div>
        <div
          onMouseEnter={() => setDecadeActive({ index: 1, isActive: true })}
          className={styles.fiftiesSection}
        ></div>
        <div
          onMouseEnter={() => setDecadeActive({ index: 2, isActive: true })}
          className={styles.sixtiesSection}
        ></div>
        <div
          onMouseEnter={() => setDecadeActive({ index: 3, isActive: true })}
          className={styles.restOfSection}
        ></div>

        {videos.map((vid, idx) => {
          return (
            <HomeVideo
              decadeActive={decadeActive}
              idx={idx}
              vid={vid}
              key={`vid_${idx}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
