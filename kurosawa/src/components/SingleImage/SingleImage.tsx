import { useInView } from "react-intersection-observer";
import styles from "./SImage.module.css";

interface SingleImageProps {
  src: string;
  alt: string;
}

const SingleImage = ({ src, alt }: SingleImageProps) => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className={styles.singleImage}>
      <img className={isInView ? styles.imgOpacity : ""} src={src} alt={alt} />
    </div>
  );
};

export default SingleImage;
