import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import Loading from "../../components/Loading/Loading";
import PageSection from "../../components/PageSection/PageSection";
import DecadeText from "../../components/DecadeText/DecadeText";
import MaxImage from "../../components/MaxImage/MaxImage";
import TwoImage from "../../components/TwoImage/TwoImage";
import WideImage from "../../components/WideImage/WideImage";
// images
import rashomon00 from "../../images/International/rashomon00.webp";
import rashomon01 from "../../images/International/rashomon01.webp";
import rashomonbts00 from "../../images/International/rashomonbts00.webp";
import rashomon02 from "../../images/International/rashomon02.webp";

const International = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loading title="international success" />}
      </AnimatePresence>

      {!loading && (
        <>
          <KurosawaName />
          <DecadePageHeader>
            <h1>International</h1>
            <h1>Success</h1>
          </DecadePageHeader>
          <Signature isInView={false} />
        </>
      )}

      {!loading && (
        <PageSection>
          <DecadeText>
            akira kurosawa came out of the 1940's a success. though often
            critics would respond with mixed reviews - some liking the work,
            others saying it was too western for wartime japan - but it was with
            the audience that he most popular. studios continued funding his
            films, and kurosawa grew more and more popular in japan. the first
            year into the new decade would bring kurosawa international
            recognition and acclaim. he did it with this: <i>Rashomon</i>
          </DecadeText>

          <MaxImage
            src={rashomon00}
            alt="Rashomon - three men sit in silence listening to the rain"
          />

          <TwoImage
            src1={rashomon01}
            src2={rashomonbts00}
            alt1="Rashomon - a bandint confronts a woman in a forest"
            alt2="Rashomon - behind the scene shot of the temple"
          />

          <WideImage
            src={rashomon02}
            alt="Rashomon - Dramtic close up of woman with knife in her hand"
          />
        </PageSection>
      )}
    </>
  );
};

export default International;
