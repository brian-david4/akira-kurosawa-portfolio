import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <>
    <div className={styles.navbarWrapper}>
        <div className={styles.navbar}>
            <Link className={styles.navbarLink} to="/">Early work's</Link>
            <Link className={styles.navbarLink} to="/">International Success</Link>
            <Link className={styles.navbarLink} to="/">In his Prime</Link>
            <Link className={styles.navbarLink} to="/">Later years</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar