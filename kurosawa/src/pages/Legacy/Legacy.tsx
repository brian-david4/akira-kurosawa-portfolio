import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import Loading from "../../components/Loading/Loading";
import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";
import PageSection from "../../components/PageSection/PageSection";
import DecadeText from "../../components/DecadeText/DecadeText";
import MaxImage from "../../components/MaxImage/MaxImage";
import WideImage from "../../components/WideImage/WideImage";
import TwoImage from "../../components/TwoImage/TwoImage";
import SingleImage from "../../components/SingleImage/SingleImage";
import Card from "../../components/Card/Card";
// images
import ran04 from "../../images/Legacy/ran04.webp";
import ran00 from "../../images/Legacy/ran00.webp";
import ran02 from "../../images/Legacy/ran02.webp";
import dreams02 from "../../images/Legacy/dreams02.webp";
import kagebts00 from "../../images/Legacy/kagebts00.webp";
import ran03 from "../../images/Legacy/ran03.webp";

const Legacy = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loading title="legacy" />}
      </AnimatePresence>

      {!loading && (
        <>
          <DecadeNavBar />
          <KurosawaName />
          <Signature isInView={false} />
          <DecadePageHeader>
            <h1>Legacy</h1>
          </DecadePageHeader>
        </>
      )}

      {!loading && (
        <PageSection>
          <DecadeText>
            from 1970 onwards kurosawa directed in colour. the film{" "}
            <i>dodes'ka-den </i> was not recieved well by critics nor the
            audience, this led to studios refusing to fund his proposals.
            kurosawa had a failed suicide attempt in 1971 following this news.
            in 1975 he directed his next film. til the end of his career{" "}
            <i>
              <b>
                Steven Spielberg, Martin Scorsese, George Lucas, Francis Ford
                Coppola
              </b>
            </i>{" "}
            backed{" "}
            <i>
              <b> akira kurosawa</b>
            </i>{" "}
            and pressured studios to fund his future projects until his death in
            1998
          </DecadeText>

          <WideImage
            src={ran04}
            alt="Ran - samurai on horseback galloping through water"
          />

          <TwoImage
            src1={ran00}
            src2={ran02}
            alt1="Ran - a samurai lord holds council with his sons and advisors"
            alt2="Ran - billowing clouds on a sunny day"
          />

          <SingleImage src={ran03} alt="Ran - a shot of green hills" />

          <Card src={kagebts00} alt="">
            kurosawa behind the scenes filming <i>kagemusha</i>
          </Card>

          <MaxImage src={dreams02} alt="" />
        </PageSection>
      )}
    </>
  );
};

export default Legacy;
