import { Link } from "react-router-dom";
import styles from "./BtnAndProfile.module.css"



const road_master = () => {
    return (
        <div className={styles.div}>
            <div className={styles.h2}>
            <h2>Road Master</h2>
            </div>
            <div className={styles.link_style}>
                <Link><button className={styles.btn}>Map</button></Link>
                <Link to="/road_list"><button className={styles.btn}>Road List</button></Link>
                <Link to="/JobsList"><button className={styles.btn}>Jobs History</button></Link>
                <Link to="/profile"><button className={styles.btn}>Profile</button></Link>
            </div>
        </div>
    )
};
export default road_master