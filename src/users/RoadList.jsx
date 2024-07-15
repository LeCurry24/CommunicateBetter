import { useEffect, useState } from "react";
import { supabase } from "../supabaseConfig";
import RoadCard from "../components/RoadCard";


const btn_style = {
    display: 'flex',
    justifyContent: 'center',
    color: 'white'
}



const road_list = () => {
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
            <div style={btn_style}>
                <p>Road List</p>
            </div>
            {fetchError &&(<p>{fetchError}</p>)}
            {Roads && (
                <div>
                    {Roads.map(Roads => (
                        <RoadCard key={Roads.id} Roads={Roads}/>
                    ))}
                </div>
            )}
        
        </>
    )
};
export default road_list