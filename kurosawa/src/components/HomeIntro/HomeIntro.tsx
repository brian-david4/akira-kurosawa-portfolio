import { motion } from "framer-motion";
import styles from "./HomeIntro.module.css";

const HomeIntro = () => {
  return (
    <motion.div className={styles.block}>
      <div className={styles.name}>
        <div className={styles.nameEn}>
          <h1>akira</h1>
          <h1>kurosawa</h1>
        </div>
        <div className={styles.nameJp}>
          <h1>黒沢明</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeIntro;
