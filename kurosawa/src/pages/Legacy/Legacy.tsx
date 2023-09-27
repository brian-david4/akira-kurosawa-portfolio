import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import Loading from "../../components/Loading/Loading";

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
          <KurosawaName />
          <Signature isInView={false} />
          <DecadePageHeader>
            <h1>Legacy</h1>
          </DecadePageHeader>
        </>
      )}
    </>
  );
};

export default Legacy;
