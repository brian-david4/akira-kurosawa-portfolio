import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import EarlyWorks from "./pages/EarlyWorks/EarlyWorks";
import International from "./pages/International/International";
import Greatness from "./pages/Greatness/Greatness";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/early" element={<EarlyWorks />} />
        <Route path="/international" element={<International />} />
        <Route path="/greatness" element={<Greatness />} />
      </Routes>
    </>
  );
}

export default App;
