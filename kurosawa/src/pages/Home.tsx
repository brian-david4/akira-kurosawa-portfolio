import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.pageBg}>
        <div className={styles.fortiesSection}></div>
        <div className={styles.fiftiesSection}></div>
        <div className={styles.sixtiesSection}></div>
        <div className={styles.restOfSection}></div>
    </div>
  )
}

export default Home;