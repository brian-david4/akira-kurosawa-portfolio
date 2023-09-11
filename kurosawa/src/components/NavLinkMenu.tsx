import { motion } from "framer-motion";
import { navLinkMenuAnim } from "./NavBarAnim";
import styles from "./NavBar.module.css";

interface NavLinkMenuProps{
    inactiveWrap: (key: number) => void;
    keyIdx: number;
}

const NavLinkMenu = ({ keyIdx, inactiveWrap }: NavLinkMenuProps) => {
  return (
    <motion.div className={styles.navLinkMenu} data-nav-link-menu-colour={keyIdx} 
    onMouseLeave={()=>inactiveWrap(keyIdx)}
    variants={navLinkMenuAnim} initial="initial" animate="enter" exit="exit">
    </motion.div>
  )
}

export default NavLinkMenu