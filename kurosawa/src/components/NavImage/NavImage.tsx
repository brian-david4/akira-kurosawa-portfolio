import { motion } from "framer-motion";
import styles from "./NavImage.module.css";
import { navVideo } from "./Anims";
import useMousePosition from "../../hooks/useMousePosition";

interface NavImageProps {
  src: string;
}

const NavImage = ({ src }: NavImageProps) => {
  const { x, y } = useMousePosition();
  const size = 250;

  return (
    <motion.div
      variants={navVideo}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        // left: `${x + "15%"}px`,
        top: `${y - size}px`,
      }}
      exit="exit"
      transition={{ type: "tween", ease: "backOut" }}
      className={styles.navImage}
    >
      <motion.video autoPlay loop={false} draggable={false} playsInline>
        <source src={src} />
      </motion.video>
    </motion.div>
  );
};

export default NavImage;
