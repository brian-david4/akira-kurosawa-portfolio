import styles from "./Signature.module.css";
import signature from "../../images/signature.webp";

const Signature = () => {
  return (
    <img
      className={styles.signature}
      src={signature}
      alt="Akira Kurosawa's signature"
      draggable="false"
    />
  );
};

export default Signature;
