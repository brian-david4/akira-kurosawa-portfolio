import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Card.module.css";

interface CardProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

const Card = ({ src, alt, children }: CardProps) => {
  const [ref, isInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isInView ? styles.opacity : ""}`}
    >
      <img className={styles.image} src={src} alt={alt} />
      <div className={styles.caption}>{children}</div>
    </div>
  );
};

export default Card;
