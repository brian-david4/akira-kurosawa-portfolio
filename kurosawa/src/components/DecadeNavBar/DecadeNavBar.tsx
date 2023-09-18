import styles from "./DNavBar.module.css";

const DecadeNavBar = () => {
  return (
    <div className={styles.menuBtn} onClick={() => console.log("clicked")}>
      <div className={styles.menuBtnInner}>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>u</span>
      </div>
    </div>
  );
};

export default DecadeNavBar;
