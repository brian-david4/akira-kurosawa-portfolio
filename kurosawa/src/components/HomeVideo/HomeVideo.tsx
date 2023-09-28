import { motion } from "framer-motion";
import { decadeImageFade } from "../../pages/Home/HomeAnim";
import styles from "./homevid.module.css";

interface HomeVideoProps {
  src: string;
  decade: string;
  id: string;
}

const HomeVideo = ({ src, id, decade }: HomeVideoProps) => {
  return (
    <>
      <motion.div className={styles.backgroundImage}>
        <video id={id} autoPlay playsInline muted loop draggable="false">
          <source src={src} />
        </video>
      </motion.div>

      <motion.h1
        className={styles.decadeTitle}
        variants={decadeImageFade}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {decade}
      </motion.h1>
    </>
  );
};

export default HomeVideo;
