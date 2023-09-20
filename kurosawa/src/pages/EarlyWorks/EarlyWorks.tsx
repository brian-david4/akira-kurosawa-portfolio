import { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";
import TwoImage from "../../components/TwoImage/TwoImage";
import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import DecadeText from "../../components/DecadeText/DecadeText";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import WideImage from "../../components/WideImage/WideImage";

import styles from "./Early.module.css";

import sugata00 from "../../images/Early-Works/sugato_00.webp";
import sugata01 from "../../images/Early-Works/sugato_01.webp";
import sugata02 from "../../images/Early-Works/sugata_02.webp";
import noRegretBts from "../../images/Early-Works/no-regrets-bts.webp";
import { motion } from "framer-motion";
import { sectionOne } from "./Anim";

const EarlyWorks = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loading && (
        <>
          <DecadeNavBar />
          <KurosawaName />
          <Signature />
          <DecadePageHeader>
            <h1>Early</h1>
            <h1>Work's</h1>
          </DecadePageHeader>
        </>
      )}

      {!loading && (
        <motion.section
          variants={sectionOne}
          initial="initial"
          animate="enter"
          className={styles.introSection}
        >
          <WideImage src={sugata00} alt="Sanshiro Sugata" />
          <DecadeText>
            After working as an assistant director for 6 years Akira Kurosawa
            debuted as a director with: <i>Sanshiro Sugata</i>
            censors claimed the film did not keep with the japanese war times
            standards - 18mins of the movies are still considered <b>lost</b>
          </DecadeText>

          <TwoImage
            src1={sugata02}
            src2={sugata01}
            alt1="Sanshiro Sugata - group of women looking sad"
            alt2="Sanshiro Sugata - Sanshiro stands in the hills"
          />

          <DecadeText>
            kurosawa's first post war film was <i>no regrets for our youth</i>-
            this theme would carry on even through to his later works. it
            received mixed reviews from critics for its political themes or
            something idk.
          </DecadeText>

          <Card src={noRegretBts} alt="Akira Kurosawa directing a scene">
            behind the scenes: <i>no regrets for our youth</i>
          </Card>

          <div>somehing extra fro scroll</div>
        </motion.section>
      )}
    </>
  );
};

export default EarlyWorks;
