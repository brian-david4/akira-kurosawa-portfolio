import { useState } from "react";
import styles from "./Home.module.css";
import highlow from "../images/highlow.webp";
import mada from "../images/madadayo.webp";
import seven from "../images/seven.webp";
import yojimbo from "../images/yojimbo.webp"

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
        
        {isFortiesActive && 
        <div className={`${styles.forties} ${styles.backgroundImage}`}><img src={seven}/></div> }
        
        {isFiftiesActive && 
        <div className={`${styles.fifties} ${styles.backgroundImage}`}><img src={yojimbo}/></div> }
        
        {isSixtiesActive && 
        <div className={`${styles.sixties} ${styles.backgroundImage}`}><img src={highlow}/></div>}
        
        {isRestActive && 
        <div className={`${styles.rest} ${styles.backgroundImage}`}><img src={mada}/></div>}

    </div>

  )
}

export default Home;