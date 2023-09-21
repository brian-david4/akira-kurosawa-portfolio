import { useInView } from "react-intersection-observer";
import styles from "./MImage.module.css";

interface MaxImageProps {
  src: string;
  alt: string;
}

const MaxImage = ({ src, alt }: MaxImageProps) => {
  const [ref, isInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div ref={ref} className={styles.imageMax}>
      <img className={isInView ? styles.imgOpacity : ""} src={src} alt={alt} />
    </div>
  );
};

export default MaxImage;
