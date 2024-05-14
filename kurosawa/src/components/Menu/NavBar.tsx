import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { linkFade, navbarScale } from "./NavBarAnim";

interface NavBarProps {
  screenWidth: number;
}

const NavBar = ({ screenWidth }: NavBarProps) => {
  const links = [
    { title: "Early Works", linkTo: "/early" },
    { title: "International Success", linkTo: "/international" },
    { title: "Greatness", linkTo: "/greatness" },
    { title: "Legacy", linkTo: "/legacy" },
  ];

  return (
    <>
      <div className={styles.navbarWrapper}>
        <motion.div
          variants={navbarScale}
          initial={screenWidth < 769 ? "smScreenInit" : "initial"}
          animate={screenWidth < 769 ? "smScreen" : "enter"}
          exit={screenWidth < 769 ? "smExit" : "exit"}
          className={styles.navbar}
        >
          {links.map((link, idx) => {
            return (
              <motion.div
                key={`l_${idx}`}
                variants={linkFade}
                initial="initial"
                animate="enter"
                exit="exit"
                className={styles.navbarLink}
              >
                <Link to={link.linkTo}>{link.title}</Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default NavBar;
