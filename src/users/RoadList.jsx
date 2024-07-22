import { useEffect, useState } from "react";
import { supabase } from "../supabaseConfig";
import RoadCard from "../components/RoadCard";
import { Link } from "react-router-dom";
import styles from "./BtnAndProfile.module.css"


const btn_style = {
    display: 'flex',
    justifyContent: 'center',
    color: 'white'
}



const RoadList = () => {
    const [fetchError, setFetchError] = useState(null)
    const [Roads, setRoads] = useState(null)

    useEffect(() => {
        const fetchRoads = async () => {
            const { data, error } = await supabase
                .from('Roads')
                .select()
                console.log(data)
                if(error) {
                    setFetchError('could not fetch the roads')
                    setRoads(null)
                    console.log(error)
                }
                if(data) {
                    setRoads(data)
                    setFetchError(null)
                }       
        }

        fetchRoads()

    }, [])
    return (
        <>
            <div className={styles.textBtn}>
                <div style={btn_style}>
                    <p>Road List</p>
                </div>
                <Link to="/JobsList"><button className={styles.ajButton}>Jobs History</button></Link>
                <Link to="/add_road"><button className={styles.ajButton}>Add Road</button></Link>
            </div>
            {fetchError &&(<p>{fetchError}</p>)}
            {Roads && (
                <div className={styles.scrollDiv}>
                    {Roads.map(Roads => (
                        <RoadCard key={Roads.id} Roads={Roads}/>
                    ))}
                </div>
            )}
        
        </>
    )
};
export default RoadList