import { motion } from "framer-motion";
import styles from "./homevid.module.css";

interface HomeVideoProps {
  // src: string;
  // decade: string;
  // id: string;
  vid: VideoType;
  decadeActive: IndexActiveType;
  idx: number;
}

const HomeVideo = ({ vid, decadeActive, idx }: HomeVideoProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: decadeActive.index === idx && decadeActive.isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
        className={styles.homeVideoWrapper}
      >
        <div className={styles.backgroundImage}>
          <video id={vid.id} autoPlay playsInline muted loop draggable="false">
            <source src={vid.src} />
          </video>
        </div>
        <h1 className={styles.decadeTitle}>{vid.decadeTitle}</h1>
      </motion.div>
    </>
  );
};

export default HomeVideo;
