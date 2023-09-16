import styles from "./DecadeText.module.css";

interface DecadeTextProps {
  children: React.ReactNode;
}

const DecadeText = ({ children }: DecadeTextProps) => {
  return (
    <div className={styles.decadeText}>
      <p className={styles.decadeTextPara}>{children}</p>
    </div>
  );
};

export default DecadeText;
