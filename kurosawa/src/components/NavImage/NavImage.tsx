import { motion } from "framer-motion";
import styles from "./NavImage.module.css";
import useMousePosition from "../../hooks/useMousePosition";

interface NavImageProps {
  src: string;
  hovered: boolean;
}

const NavImage = ({ src, hovered }: NavImageProps) => {
  const { y } = useMousePosition();
  const size = 150;

  return (
    <motion.div
      animate={{
        top: `${y - size}px`,
      }}
      transition={{ type: "tween" }}
      className={styles.navImage}
    >
      <motion.video
        animate={{
          opacity: hovered ? 1 : 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        }}
        muted
        autoPlay
        loop
        draggable={false}
        playsInline
      >
        <source src={src} />
      </motion.video>
    </motion.div>
  );
};

export default NavImage;
