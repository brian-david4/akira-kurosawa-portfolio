import styles from "./NavImage.module.css";

interface NavImageProps {
  src: string;
}

const NavImage = ({ src }: NavImageProps) => {
  return (
    <div className={styles.navImage}>
      <video autoPlay loop={false} draggable={false} playsInline>
        <source src={src} />
      </video>
    </div>
  );
};

export default NavImage;
