import styles from "./TImage.module.css";

interface TwoImageProps {
  src1: string;
  alt1: string;

  src2: string;
  alt2: string;
}

const TwoImage = ({ src1, alt1, src2, alt2 }: TwoImageProps) => {
  return (
    <div className={styles.twoImageContainer}>
      <div className={`${styles.singleImgWrapper} singleImgWrapper`}>
        <img src={src1} alt={alt1} />
      </div>

      <div className={`${styles.singleImgWrapper} singleImgWrapper`}>
        <img src={src2} alt={alt2} />
      </div>
    </div>
  );
};

export default TwoImage;
