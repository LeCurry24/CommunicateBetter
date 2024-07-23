import styles from "./RoadCard.module.css"
import { Link } from "react-router-dom";


const RoadCard = ({ Roads }) => {
    return(
            <div className={styles.contain}>
                    <h3>{Roads.address}</h3>
                    <p>{Roads.time}</p>
                    <p>{Roads.date}</p>
                    <p>{Roads.note}</p>
                    <div className={styles.cardBtn}>
                    <button>Preset</button>
                    <button>Close</button>
                    <button>Open</button>
                    </div>
                    <button className={styles.closeBtn}>X</button>
                    <Link to={"" + Roads.id} className={styles.editBtn}><button>Edit</button></Link>
            </div>
    )
};
export default RoadCard