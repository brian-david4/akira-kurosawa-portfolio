import { useState } from "react";
import styles from "./DNavBar.module.css";
import DecadeNavMenu from "./DecadeNavMenu";
import { AnimatePresence } from "framer-motion";

const DecadeNavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div
        className={styles.menuBtn}
        onClick={() => setMenuActive(!menuActive)}
      >
        <div className={styles.menuLabelContainer}>
          <div className={styles.btnInnerMenu} data-active-menu={menuActive}>
            <span>m</span>
            <span>e</span>
            <span>n</span>
            <span>u</span>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {menuActive && <DecadeNavMenu />}
      </AnimatePresence>
    </>
  );
};

export default DecadeNavBar;
