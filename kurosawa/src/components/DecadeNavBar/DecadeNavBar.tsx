import { useState } from "react";
import styles from "./DNavBar.module.css";
import DecadeNavMenu from "./DecadeNavMenu";

const DecadeNavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div
        className={styles.menuBtn}
        onClick={() => setMenuActive(!menuActive)}
      >
        <div className={styles.menuBtnInner}>
          <span>m</span>
          <span>e</span>
          <span>n</span>
          <span>u</span>
        </div>
      </div>
      {menuActive && <DecadeNavMenu />}
    </>
  );
};

export default DecadeNavBar;
