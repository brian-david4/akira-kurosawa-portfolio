import { useState, useEffect } from "react";

import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";
import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";

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
