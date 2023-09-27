import DecadeNavBar from "../../components/DecadeNavBar/DecadeNavBar";
import DecadePageHeader from "../../components/DecadePageHeader/DecadePageHeader";
import KurosawaName from "../../components/KurosawaName/KurosawaName";
import Signature from "../../components/Signature/Signature";

const Greatness = () => {
  return (
    <>
      <KurosawaName />
      <DecadeNavBar />
      <Signature isInView={false} />
      <DecadePageHeader>
        <h1>Greatness</h1>
      </DecadePageHeader>
    </>
  );
};

export default Greatness;
