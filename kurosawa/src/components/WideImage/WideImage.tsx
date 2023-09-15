"use client";
import { useInView } from "react-intersection-observer";
import styles from "./WImage.module.css";

interface WideImageProps {
  src: string;
  alt: string;
}

const WideImage = ({ src, alt }: WideImageProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className={styles.imgWide}>
      <img className={inView ? styles.imgOpacity : ""} src={src} alt={alt} />
    </div>
  );
};

export default WideImage;
