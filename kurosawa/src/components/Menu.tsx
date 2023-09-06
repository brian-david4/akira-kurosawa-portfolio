import NavBar from "./NavBar";
import styles from "./NavBar.module.css";
import { useState } from "react";

const Menu = () => {
    const [isMenuActive, setIsMenuActive] = useState(false); 

  return (
    <>
    <div onClick={()=>setIsMenuActive(!isMenuActive)} className={styles.menuBtn}></div>
    {isMenuActive && <NavBar />}
    </>
  )
}

export default Menu;