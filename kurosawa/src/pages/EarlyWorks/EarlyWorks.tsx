import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import WideImage from "../../components/WideImage/WideImage";
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
        <WideImage src={sugato00} alt="Sanshiro Sugata" />

        <div className={styles.decadeText}>
          After working as an assistant director for 6 years Akira Kurosawa
          debuted as a director with: <i>Sanshiro Sugata</i>
          censors claimed the film did not keep with the japnese war times
          standards - 18mins of the movies are still considered <em>lost</em>
        </div>
      </section>
    </>
  );
};

export default EarlyWorks;
