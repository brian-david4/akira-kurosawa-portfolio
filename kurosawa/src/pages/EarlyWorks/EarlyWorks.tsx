import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import signature from "../../images/signature.webp";
import styles from "./Early.module.css";

const EarlyWorks = () => {
  return (
    <>
      <DecadePageHeader>
        <h1>Early</h1>
        <h1>Work's</h1>
      </DecadePageHeader>

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
