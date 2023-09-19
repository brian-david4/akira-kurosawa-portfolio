import { useInView } from "react-intersection-observer";
import styles from "./TImage.module.css";

interface TwoImageProps {
  src1: string;
  alt1: string;

  src2: string;
  alt2: string;
}

const TwoImage = ({ src1, alt1, src2, alt2 }: TwoImageProps) => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className={styles.twoImageContainer}>
      <div className={`${styles.singleImgWrapper} singleImgWrapper`}>
        <img
          className={isInView ? styles.imgOpacity : ""}
          src={src1}
          alt={alt1}
        />
      </div>

      <div className={`${styles.singleImgWrapper} singleImgWrapper`}>
        <img
          className={isInView ? styles.imgOpacity : ""}
          src={src2}
          alt={alt2}
        />
      </div>
    </div>
  );
};

export default TwoImage;
