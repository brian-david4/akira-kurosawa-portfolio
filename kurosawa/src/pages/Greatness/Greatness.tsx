import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";
import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import Loading from "../../components/Loading/Loading";
import PageSection from "../../components/PageSection/PageSection";
import WideImage from "../../components/WideImage/WideImage";
import DecadeText from "../../components/DecadeText/DecadeText";
import TwoImage from "../../components/TwoImage/TwoImage";
import SingleImage from "../../components/SingleImage/SingleImage";
import MaxImage from "../../components/MaxImage/MaxImage";
// images
import redBeard02 from "../../images/Greatness/redBeard02.webp";
import sanjuro00 from "../../images/Greatness/sanjuro00.webp";
import redBeard01 from "../../images/Greatness/redbeard01.webp";
import badSleep01 from "../../images/Greatness/badSleep01.webp";
import badSleep00 from "../../images/Greatness/badSleep00.webp";
import redBeard00 from "../../images/Greatness/redBeard00.webp";
import badSleep02 from "../../images/Greatness/badSleep02.webp";
import highLow00 from "../../images/Greatness/highLow00.webp";
import highLow2 from "../../images/Greatness/highLow02.webp";
import sanjuro01 from "../../images/Greatness/sanjuro01.webp";
import PageFooter from "../../components/PageFooter/PageFooter";
// footer images
import footerNext from "../../images/ran1.webp";
import footerPrevious from "../../images/International/throne00.webp";

const Greatness = () => {
  const [loading, setLoading] = useState(true);
  const [footerRef, isInView] = useInView({ threshold: 0.4 });

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
        {loading && <Loading title="greatness" />}
      </AnimatePresence>
      {!loading && (
        <>
          <KurosawaName />
          <DecadeNavBar />
          <Signature isInView={isInView} />
          <DecadePageHeader>
            <h1>Greatness</h1>
          </DecadePageHeader>
        </>
      )}

      {!loading && (
        <PageSection>
          <WideImage
            src={redBeard02}
            alt="Bad Sleep Well - A group of journalist look off screen"
          />

          <DecadeText>
            the sixties was the most productive period for <b>akira kurosawa</b>
            . his movie series consisting of <i>yojimbo</i> and <i>sunjuro</i>{" "}
            were adapted by hollywood as the basis for the western:{" "}
            <i>A fistful of dollars</i>.
          </DecadeText>

          <TwoImage
            src1={sanjuro00}
            src2={redBeard01}
            alt1="Sanjuro - A group of samurai bow and kneel infront of the protagonist"
            alt2="Red Beard - doctors and family members kneel around a sick child"
          />

          <SingleImage
            src={badSleep01}
            alt="The Bad Sleep Well - A group of journalists look off screen"
          />

          <MaxImage
            src={badSleep00}
            alt="The Bad Sleep Well - 2 men in suits confront a business man"
          />

          <TwoImage
            src1={redBeard00}
            src2={badSleep02}
            alt1="Red Beard - a man and woman stand under an umbrella in the snow"
            alt2="The Bad Sleep Well - Journalist stand outisde a wedding hall, a man comes to close it."
          />

          <DecadeText>
            The sixties also were the end of his collaborations with actor{" "}
            <b>toshiro mifune</b> after a falling out. The actor by now was very
            well regarded in Japan and internationally.
          </DecadeText>

          <WideImage
            src={highLow00}
            alt="High And Low - Policemen and a family wait anxiously around a phone"
          />

          <SingleImage
            src={highLow2}
            alt="High and Low - A driver pleads his boss to pay the ransom of his son whilst three police officers look on"
          />
          <DecadeText>
            his movie <i>high and low</i> broke his box office records, his
            third movie in a row to do so.
          </DecadeText>
          <WideImage
            src={sanjuro01}
            alt="Sanjuro - samurai bow to show gratitude"
          />

          <PageFooter
            nextTitle="legacy"
            previousTitle="international success"
            goToNext="/legacy"
            goToPrevious="/international"
            srcNext={footerNext}
            srcPrevious={footerPrevious}
            footerRef={footerRef}
            isFooterInView={isInView}
          />
        </PageSection>
      )}
    </>
  );
};

export default Greatness;
