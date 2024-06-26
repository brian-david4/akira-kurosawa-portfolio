import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence } from "framer-motion";

import MaxImage from "../../components/MaxImage/MaxImage";
import Card from "../../components/Card/Card";
import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";
import TwoImage from "../../components/TwoImage/TwoImage";
import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import DecadeText from "../../components/DecadeText/DecadeText";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import WideImage from "../../components/WideImage/WideImage";
import PageFooter from "../../components/PageFooter/PageFooter";

// main images
import sugata00 from "../../images/Early-Works/sugato_00.webp";
import sugata01 from "../../images/Early-Works/sugato_01.webp";
import sugata02 from "../../images/Early-Works/sugata_02.webp";
import noRegretBts from "../../images/Early-Works/no-regrets-bts.webp";
import noRegrets01 from "../../images/Early-Works/no-regrets01.webp";
import noRegrets from "../../images/Early-Works/no-regrets.webp";
import quietDuel01 from "../../images/Early-Works/last-duel01.webp";
import noRegrets02 from "../../images/Early-Works/No_Regrets_02.webp";
import strayDog from "../../images/Early-Works/stray-dog00.webp";
import quietDuel from "../../images/Early-Works/quiet_duel00.webp";
import SingleImage from "../../components/SingleImage/SingleImage";
import Loading from "../../components/Loading/Loading";
// images for footer
import ran1 from "../../images/ran1.webp";
import yojimbo from "../../images/yojimbo.webp";
import PageSection from "../../components/PageSection/PageSection";

const EarlyWorks = () => {
  const [loading, setLoading] = useState(true);
  const [footerRef, isInView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loading title="Early Work's" />}
      </AnimatePresence>
      {!loading && (
        <>
          <DecadeNavBar />
          <KurosawaName />
          <Signature isInView={isInView} />
          <DecadePageHeader>
            <h1>Early</h1>
            <h1>Work's</h1>
          </DecadePageHeader>
        </>
      )}

      {!loading && (
        <PageSection>
          <WideImage src={sugata00} alt="Sanshiro Sugata" />
          <DecadeText>
            After working as an assistant director for 6 years Akira Kurosawa
            debuted as a director with: <i>Sanshiro Sugata (1946)</i>. censors
            claimed the film did not keep with the japanese war times standards
            - 18mins of the movies are still considered <b>lost ..</b>
          </DecadeText>

          <TwoImage
            src1={sugata02}
            src2={sugata01}
            alt1="Sanshiro Sugata - group of women looking sad"
            alt2="Sanshiro Sugata - Sanshiro stands in the hills"
          />

          <DecadeText>
            kurosawa's first post war film was <i>no regrets for our youth</i> -
            it received mixed reviews from critics (though well recieved by the
            mass audience) for its individualist view of society.
          </DecadeText>

          <Card src={noRegretBts} alt="Akira Kurosawa directing a scene">
            behind the scenes: <i>no regrets for our youth</i>
          </Card>

          <MaxImage
            src={noRegrets01}
            alt="Shot of a group - No Regrets For Our Youth"
          />

          <TwoImage
            src1={noRegrets02}
            src2={quietDuel01}
            alt1="No Regrets For Our Youth - a woman looks at a man in  a suit"
            alt2="A Quiet Duel - A doctor tired after a shift"
          />

          <WideImage
            src={strayDog}
            alt="Stray Dog - A japanese noire film - two police officers lurk in the shadows"
          />

          <DecadeText>
            kurosawa emerged from the 40's a success. though not always with the
            critics because of his challenging themes etc. but he was most often
            a hit with the audience. so the studios continued funding his future
            projects, also kurosawa would get backed by contemporaries such as
            Yasujiro Ozu, which put more pressure on the studios.
          </DecadeText>

          <SingleImage
            src={quietDuel}
            alt="A Quiet Duel - Two doctors on a cigarette break"
          />

          <MaxImage
            src={noRegrets}
            alt="No Regrets For Our Youth - Man lays in a filed with a lady beside him"
          />

          <PageFooter
            footerRef={footerRef}
            goToNext="/international"
            nextTitle="international success"
            goToPrevious="/"
            previousTitle="home"
            srcNext={yojimbo}
            srcPrevious={ran1}
            isFooterInView={isInView}
          />
        </PageSection>
      )}
    </>
  );
};

export default EarlyWorks;
