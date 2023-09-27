import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import Loading from "../../components/Loading/Loading";
import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";
import PageSection from "../../components/PageSection/PageSection";
import DecadeText from "../../components/DecadeText/DecadeText";

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
        </PageSection>
      )}
    </>
  );
};

export default Legacy;
