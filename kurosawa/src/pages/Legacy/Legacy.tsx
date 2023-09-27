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
import mada01 from "../../images/Legacy/mada01.webp";
import mada02 from "../../images/Legacy/mada02.webp";
import dreams00 from "../../images/Legacy/dreams00.webp";
import dreams01 from "../../images/Legacy/dreams01.webp";
import dreams03 from "../../images/Legacy/dreams03.webp";
import uzala00 from "../../images/Legacy/uzala00.webp";
import uzala01 from "../../images/Legacy/uzala01.webp";
import uzala02 from "../../images/Legacy/uzala02.webp";
import uzala03 from "../../images/Legacy/uzala03.webp";
import uzala04 from "../../images/Legacy/uzala04.webp";

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

          <Card src={kagebts00} alt="Kurosawa behind the scenes">
            kurosawa behind the scenes filming <i>kagemusha</i>
          </Card>

          <MaxImage
            src={dreams02}
            alt="Dreams - a young boy stands at the gate of his house"
          />

          <TwoImage
            src1={mada01}
            src2={mada02}
            alt1="Madadayo - a young boy hiding behind hay stacks whilst people on the hill behind look for him"
            alt2="Madadayo - A couple sit on the step of a small shed."
          />

          <WideImage
            src={uzala04}
            alt="Dersu Uzala - gazing at the sunset and moonrise"
          />

          <WideImage
            src={uzala03}
            alt="Dersu Uzala - a soldier and a hunter stand at sunset"
          />

          <SingleImage
            src={dreams00}
            alt="Dreams - a recreation of 'Crows over Wheatfields' by van gogh in real life"
          />

          <TwoImage
            src1={uzala01}
            src2={uzala02}
            alt1="Dersu Uzala - a hunter through the branches of a tree"
            alt2="Dersu Uzala - a soldier and hunter in a field of tall grass"
          />

          <WideImage
            src={uzala00}
            alt="Dersu Uzala - a hunter and a soldier look over their shoulder at the camera."
          />

          <MaxImage
            src={dreams01}
            alt="Dreams - a young boy walks through a field of flowers with a rainbow over it"
          />

          <WideImage
            src={dreams03}
            alt="Dreams - a man walks out of a tunnel at the blueness of dawn."
          />
        </PageSection>
      )}
    </>
  );
};

export default Legacy;
