import styles from "./Signature.module.css";
import signature from "../../images/signature.webp";

interface SignatureProps {
  isInView: boolean;
}

const Signature = ({ isInView }: SignatureProps) => {
  return (
    <img
      className={`${styles.signature} ${
        isInView ? styles.signatureOpacity : ""
      }`}
      src={signature}
      alt="Akira Kurosawa's signature"
      draggable="false"
    />
  );
};

export default Signature;
