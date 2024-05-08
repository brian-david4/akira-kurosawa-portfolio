import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";

import { navLink } from "./anims";
import styles from "./decNavLk.module.css";
import { useEffect, useState } from "react";
import NavImage from "../NavImage/NavImage";

interface DecadeNavLinkProps {
  link: PageLinkType;
}

const DecadeNavLink = ({ link }: DecadeNavLinkProps) => {
  useEffect(() => {
    const linkAnim = gsap.fromTo(
      ".linkDiv",
      { yPercent: 100 },
      {
        duration: 1.3,
        yPercent: 0,
        ease: "power2.inOut",
        delay: 0.7,
        stagger: { amount: 0.2 },
      }
    );

    return () => {
      linkAnim.revert();
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className={styles.linkWrapper}>
        <motion.div
          variants={navLink}
          exit="exit"
          className={styles.link}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a href={link.url} className="linkDiv">
            {link.title}
          </a>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        <NavImage hovered={isHovered} src={link.vidSrc} />
      </AnimatePresence>
    </>
  );
};

export default DecadeNavLink;
