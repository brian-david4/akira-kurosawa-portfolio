import styles from "./NavImage.module.css";

interface NavImageProps {
  src: string;
  alt: string;
}

const NavImage = ({ src, alt }: NavImageProps) => {
  return (
    <div className={styles.navImage}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default NavImage;
