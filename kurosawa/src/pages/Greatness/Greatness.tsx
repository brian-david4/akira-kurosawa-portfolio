import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

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

const Greatness = () => {
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
        {loading && <Loading title="greatness" />}
      </AnimatePresence>
      {!loading && (
        <>
          <KurosawaName />
          <DecadeNavBar />
          <Signature isInView={false} />
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
            the sixties was the most period for <b>akira kurosawa</b>. his movie
            series consisting of <i>yojimbo</i> and <i>sunjuro</i> were adapted
            by hollywood as the basis for the western:{" "}
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
            alt="High and Low - heroin addicts in the darkness"
          />
        </PageSection>
      )}
    </>
  );
};

export default Greatness;
