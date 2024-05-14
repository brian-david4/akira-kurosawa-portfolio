import { motion } from "framer-motion";
import styles from "./DecadeText.module.css";

interface DecadeTextProps {
  children: string | React.ReactNode;
}

const DecadeText = ({ children }: DecadeTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.8, ease: [0.5, 1, 0.89, 1] }}
      className={styles.textWrapper}
    >
      <p className={styles.decadeText}>{children}</p>
    </motion.div>
  );
};

export default DecadeText;
