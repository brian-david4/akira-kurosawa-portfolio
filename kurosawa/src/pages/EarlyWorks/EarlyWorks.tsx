import signature from "../../images/signature.webp";
import styles from "./Early.module.css";

const EarlyWorks = () => {
  return (
    <>
      <div className={styles.nameTitle}>
        <h1>Early</h1>
        <h1>Work's</h1>
      </div>

      <img
        className={styles.signature}
        src={signature}
        alt="Akira Kurosawa's signature"
        draggable="false"
      />
    </>
  );
};

export default EarlyWorks;
