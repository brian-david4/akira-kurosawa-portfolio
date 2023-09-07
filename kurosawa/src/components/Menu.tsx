import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavBar from "./NavBar";
import styles from "./NavBar.module.css";

const Menu = () => {
    const [isMenuActive, setIsMenuActive] = useState(false); 

  return (
    <>
    <div onClick={()=>setIsMenuActive(!isMenuActive)} className={styles.menuBtn}>
      <div data-menu-active={isMenuActive} className={styles.burger}></div>
    </div>
    <AnimatePresence mode="wait">{isMenuActive && <NavBar />}</AnimatePresence>
    </>
  )
}

export default Menu;