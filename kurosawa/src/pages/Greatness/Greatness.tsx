import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";
import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import Loading from "../../components/Loading/Loading";
import PageSection from "../../components/PageSection/PageSection";
import WideImage from "../../components/WideImage/WideImage";
// images
import redBeard02 from "../../images/Greatness/redBeard02.webp";

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
        </PageSection>
      )}
    </>
  );
};

export default Greatness;
