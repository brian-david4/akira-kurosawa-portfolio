import { useState, useEffect } from "react";

import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";

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
    </>
  );
};

export default International;
