import { motion } from "framer-motion";
import styles from "./NavImage.module.css";
import { navVideo } from "./Anims";
import useMousePosition from "../../hooks/useMousePosition";

interface NavImageProps {
  src: string;
}

const NavImage = ({ src }: NavImageProps) => {
  const { y } = useMousePosition();
  const size = 250;

  return (
    <motion.div
      variants={navVideo}
      initial={{ top: "50%" }}
      animate={{
        // left: `${x + "15%"}px`,
        top: `${y - size}px`,
      }}
      exit="exit"
      transition={{ type: "tween", ease: "backOut" }}
      className={styles.navImage}
    >
      <motion.video
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        }}
        muted
        autoPlay
        loop={false}
        draggable={false}
        playsInline
      >
        <source src={src} />
      </motion.video>
    </motion.div>
  );
};

export default NavImage;
