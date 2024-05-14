import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavBar from "./NavBar";
import styles from "./NavBar.module.css";

interface MenuProps {
  screenWidth: number;
}

const Menu = ({ screenWidth }: MenuProps) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsMenuActive(!isMenuActive)}
        className={styles.menuBtn}
      >
        <div data-menu-active={isMenuActive} className={styles.burger}></div>
      </div>
      <AnimatePresence mode="wait">
        {isMenuActive && <NavBar screenWidth={screenWidth} />}
      </AnimatePresence>
    </>
  );
};

export default Menu;
