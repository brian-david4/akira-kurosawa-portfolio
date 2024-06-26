import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import EarlyWorks from "./pages/EarlyWorks/EarlyWorks";
import International from "./pages/International/International";
import Greatness from "./pages/Greatness/Greatness";
import Legacy from "./pages/Legacy/Legacy";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();

  const [isIntroPlaying, setIntroPlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroPlay(false);
    }, 9500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home isIntroPlaying={isIntroPlaying} />} />
        <Route path="/early" element={<EarlyWorks />} />
        <Route path="/international" element={<International />} />
        <Route path="/greatness" element={<Greatness />} />
        <Route path="/legacy" element={<Legacy />} />
      </Routes>
    </>
  );
}

export default App;
