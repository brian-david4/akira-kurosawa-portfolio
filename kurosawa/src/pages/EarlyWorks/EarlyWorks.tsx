import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import DecadeText from "../../components/DecadeText/DecadeText";
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
        <DecadeText>
          <span className="line">
            After working as an assistant director for 6 years
          </span>
          <span className="line">
            Akira Kurosawa debuted as a director with: <i>Sanshiro Sugata</i>
          </span>
          <span className="line">
            censors claimed the film did not keep with the japanese
          </span>
          <span className="line">
            {" "}
            war times standards - 18mins of the movies are still considered{" "}
            <b>lost</b>
          </span>
        </DecadeText>
      </section>
    </>
  );
};

export default EarlyWorks;
