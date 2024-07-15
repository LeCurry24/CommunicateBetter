import { Outlet, Link } from "react-router-dom"
import styles from "./Layout.module.css"





const Layout = () => {
    return(
        <>
        <div className={styles.layout}>
            <div className={styles.btnLayout}>
                <Link to="/"><button className={styles.btn}>home</button></Link>
                <Link to="/sign_in"><button className={styles.btn}>Sign In</button></Link>
                <Link to="/sign_up"><button className={styles.btn}>Sign Up</button></Link>
                <Link to="/sign_out"><button className={styles.btn}>Sign out</button></Link>
                <Link to="/road_master"><button className={styles.btn}>Road Master</button></Link>
                <Link to="/contractor"><button className={styles.btn}>Contractor</button></Link>
            </div>
            <Outlet/>
        </div>
        
        </>
    )
}
export default Layout