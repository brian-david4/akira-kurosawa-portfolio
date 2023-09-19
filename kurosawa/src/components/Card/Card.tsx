import styles from "./Card.module.css";

interface CardProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

const Card = ({ src, alt, children }: CardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={src} alt={alt} />
      <div className={styles.caption}>{children}</div>
    </div>
  );
};

export default Card;
