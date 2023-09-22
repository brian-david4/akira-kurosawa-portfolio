import { motion } from "framer-motion";
import styles from "./NavImage.module.css";
import { navVideo } from "./Anims";

interface NavImageProps {
  src: string;
}

const NavImage = ({ src }: NavImageProps) => {
  return (
    <motion.div
      variants={navVideo}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.navImage}
    >
      <motion.video autoPlay loop={false} draggable={false} playsInline>
        <source src={src} />
      </motion.video>
    </motion.div>
  );
};

export default NavImage;
