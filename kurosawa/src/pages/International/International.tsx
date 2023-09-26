import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";

const International = () => {
  return (
    <>
      <KurosawaName />
      <DecadePageHeader>
        <h1>International</h1>
        <h1>Success</h1>
      </DecadePageHeader>
      <Signature isInView={false} />
    </>
  );
};

export default International;
