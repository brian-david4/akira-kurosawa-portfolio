import styles from "./WImage.module.css";

interface WideImageProps {
  src: string;
  alt: string;
}

const WideImage = ({ src, alt }: WideImageProps) => {
  return (
    <div className={styles.imgWide}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default WideImage;
