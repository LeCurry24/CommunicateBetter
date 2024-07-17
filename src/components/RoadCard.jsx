import styles from "./RoadCard.module.css"


const RoadCard = ({ Roads }) => {
    return(
            <div className={styles.contain}>
                    <h3>{Roads.address}</h3>
                    <p>{Roads.time}</p>
                    <p>{Roads.date}</p>
                    <p>{Roads.note}</p>
                    <button>Preset</button>
                    <button>Preset standby</button>
                    <button>Close</button>  
            </div>
    )
};
export default RoadCard