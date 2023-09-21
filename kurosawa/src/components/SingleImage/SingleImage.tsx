import styles from "./SImage.module.css";

interface SingleImageProps {
  src: string;
  alt: string;
}

const SingleImage = ({ src, alt }: SingleImageProps) => {
  return (
    <div className={styles.singleImage}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default SingleImage;
