import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import sugato00 from "../../images/Early-Works/sugato_00.webp";
import styles from "./Early.module.css";

const EarlyWorks = () => {
  return (
    <>
      <KurosawaName />
      <Signature />
      <DecadePageHeader>
        <h1>Early</h1>
        <h1>Work's</h1>
      </DecadePageHeader>

      <section className={styles.introSection}>
        <div className={styles.imgWide}>
          <img src={sugato00} alt="Sanshiro Sugato" />
        </div>
      </section>
    </>
  );
};

export default EarlyWorks;
