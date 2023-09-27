import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import Loading from "../../components/Loading/Loading";
import PageSection from "../../components/PageSection/PageSection";
import DecadeText from "../../components/DecadeText/DecadeText";
import MaxImage from "../../components/MaxImage/MaxImage";
import TwoImage from "../../components/TwoImage/TwoImage";
import WideImage from "../../components/WideImage/WideImage";
import Card from "../../components/Card/Card";
import SingleImage from "../../components/SingleImage/SingleImage";
import PageFooter from "../../components/PageFooter/PageFooter";
// images
import rashomon00 from "../../images/International/rashomon00.webp";
import rashomon01 from "../../images/International/rashomon01.webp";
import rashomonbts00 from "../../images/International/rashomonbts00.webp";
import rashomon02 from "../../images/International/rashomon02.webp";
import ikiru01 from "../../images/International/ikiru01.webp";
import ikiru00 from "../../images/International/ikiru00.webp";
import ikiru02 from "../../images/International/ikiru02.webp";
import throne00 from "../../images/International/throne00.webp";
import samurai00 from "../../images/International/samurai00.webp";
import samurai01 from "../../images/International/samurai01.webp";
// footer images
import strayDog from "../../images/Early-Works/stray-dog00.webp";
import highLow from "../../images/highlow.webp";
import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";

const International = () => {
  const [loading, setLoading] = useState(true);
  const [footerRef, isInView] = useInView({ threshold: 0.4 });

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
          <DecadeNavBar />
          <KurosawaName />
          <DecadePageHeader>
            <h1>International</h1>
            <h1>Success</h1>
          </DecadePageHeader>
          <Signature isInView={isInView} />
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

          <DecadeText>
            <i>rashomon</i> gathered a lot of attention at the venice film
            festival, winning a golden bear award. the movie is respected for
            it's innovative use of the untrustworthy narrator, as the story is
            about one event told from four seperate points of view.
          </DecadeText>

          <Card
            src={ikiru01}
            alt="Ikiru - a man at work stares emptily at his office and the people in it"
          >
            <i>ikiru</i> 1952
          </Card>

          <MaxImage
            src={ikiru00}
            alt="Ikiru - The protagonsit has decided to do good with his life, and looks at a pile of rubbish where he plans to make a park"
          />

          <SingleImage
            src={samurai00}
            alt="Seven Samurai - a samurai stands on a hill, holding a katana on his shoulder"
          />

          <WideImage
            src={throne00}
            alt="Throne of Blood - the king, peppered with arrows, lies on the ground. his soldiers stand around him"
          />

          <SingleImage
            src={ikiru02}
            alt="Ikiru - A man in a suit and winter coat walks over a bridge with the sky behind him"
          />
          <MaxImage
            src={samurai01}
            alt="Seven Samurai - the villagers gather around the samurai who lead them"
          />

          <PageFooter
            nextTitle="greatness"
            goToNext="/greatness"
            previousTitle="early work's"
            goToPrevious="/early"
            footerRef={footerRef}
            isFooterInView={isInView}
            srcNext={highLow}
            srcPrevious={strayDog}
          />
        </PageSection>
      )}
    </>
  );
};

export default International;
