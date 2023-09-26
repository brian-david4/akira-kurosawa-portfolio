import { motion } from "framer-motion";
import styles from "./section.module.css";
import { sectionOne } from "./Anim";

interface PageSectionProps {
  children: React.ReactNode;
}
const PageSection = ({ children }: PageSectionProps) => {
  return (
    <motion.section
      variants={sectionOne}
      initial="initial"
      animate="enter"
      className={styles.pageSection}
    >
      {children}
    </motion.section>
  );
};

export default PageSection;
