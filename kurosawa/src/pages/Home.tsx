import { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
    const [isFortiesActive, setIsFortiesActive] = useState(false);
    const [isFiftiesActive, setIsFiftiesActive] = useState(false);
    const [isSixtiesActive, setIsSixtiesActive] = useState(false);
    const [isRestActive, setIsRestActive] = useState(false);

  return (
    <div className={styles.pageBg}>
        <div onMouseEnter={() => setIsFortiesActive(true)} onMouseLeave={() => setIsFortiesActive(false)} className={styles.fortiesSection}></div>
        <div onMouseEnter={() => setIsFiftiesActive(true)} onMouseLeave={() => setIsFiftiesActive(false)} className={styles.fiftiesSection}></div>
        <div onMouseEnter={() => setIsSixtiesActive(true)} onMouseLeave={() => setIsSixtiesActive(false)} className={styles.sixtiesSection}></div>
        <div onMouseEnter={() => setIsRestActive(true)} onMouseLeave={() => setIsRestActive(false)} className={styles.restOfSection}></div>
        
        {isFortiesActive && <h1>40 is active</h1>}
        {isFiftiesActive && <h1>50 is active</h1>}
        {isSixtiesActive && <h1>60 is active</h1>}
        {isRestActive && <h1>Rest is active</h1>}
    </div>

  )
}

export default Home;