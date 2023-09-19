// import Card from "../../components/Card/Card";
import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";
import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import DecadeText from "../../components/DecadeText/DecadeText";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import WideImage from "../../components/WideImage/WideImage";
import styles from "./Early.module.css";

import sugata00 from "../../images/Early-Works/sugato_00.webp";
import sugata01 from "../../images/Early-Works/sugato_01.webp";
import TwoImage from "../../components/TwoImage/TwoImage";

const EarlyWorks = () => {
  return (
    <>
      <DecadeNavBar />
      <KurosawaName />
      <Signature />
      <DecadePageHeader>
        <h1>Early</h1>
        <h1>Work's</h1>
      </DecadePageHeader>

      <section className={styles.introSection}>
        <WideImage src={sugata00} alt="Sanshiro Sugata" />
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

        <TwoImage src1={sugata00} src2={sugata01} alt1="a" alt2="b" />

        <div>somehing extra fro scroll</div>
      </section>
    </>
  );
};

export default EarlyWorks;
