import { useState, useEffect } from "react";
import styles from "./DNavBar.module.css";
import DecadeNavMenu from "./DecadeNavMenu";
import { AnimatePresence } from "framer-motion";

const DecadeNavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuActive) {
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "visible";
      document.body.style.position = "inherit";
    }
  }, [menuActive]);

  return (
    <>
      <div
        className={styles.menuBtn}
        onClick={() => setMenuActive(!menuActive)}
      >
        <div className={styles.btnInnerMenu} data-active-menu={menuActive}>
          <span
            style={{ transitionDelay: "0.025s" }}
            data-ltr="m"
            className={styles.textWrap}
          >
            m
          </span>
          <span
            style={{ transitionDelay: "0.05s" }}
            data-ltr="e"
            className={styles.textWrap}
          >
            e
          </span>
          <span
            style={{ transitionDelay: "0.075s" }}
            data-ltr="n"
            className={styles.textWrap}
          >
            n
          </span>
          <span
            style={{ transitionDelay: "0.1s" }}
            data-ltr="u"
            className={styles.textWrap}
          >
            u
          </span>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {menuActive && <DecadeNavMenu />}
      </AnimatePresence>
    </>
  );
};

export default DecadeNavBar;
