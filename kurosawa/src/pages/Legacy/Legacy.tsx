import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";

const Legacy = () => {
  return (
    <>
      <KurosawaName />
      <Signature isInView={false} />
      <DecadePageHeader>
        <h1>Legacy</h1>
      </DecadePageHeader>
    </>
  );
};

export default Legacy;
