import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";
import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";
import Loading from "../../components/Loading/Loading";

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
    </>
  );
};

export default Greatness;
