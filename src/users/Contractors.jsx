import { Link } from "react-router-dom";
import styles from "./BtnAndProfile.module.css"






const contractor = () => {
    return (
        <div>
            <div className={styles.h2}>
            <h2>Contractor</h2>
            </div>
            <div className={styles.link_style}>
                <Link><button className={styles.btn}>Map</button></Link>
                <Link to="/con_road_list"><button className={styles.btn}>Road List</button></Link>
                <Link to="/con_add_road"><button className={styles.btn}>Add Road</button></Link>
                <Link to="/con_profile"><button className={styles.btn}>Profile</button></Link>

            </div>
        </div>
    )
};
export default contractor