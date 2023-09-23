import { motion } from "framer-motion";
import styles from "./loading.module.css";
import { load } from "./Anim";

interface LoadingProps {
  title: string;
}

const Loading = ({ title }: LoadingProps) => {
  return (
    <motion.div variants={load} exit="exit" className={styles.loadPage}>
      <h1>{`the ${title} page is loading..`}</h1>
    </motion.div>
  );
};

export default Loading;
