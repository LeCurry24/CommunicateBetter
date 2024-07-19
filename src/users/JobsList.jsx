import { Link } from "react-router-dom"
import styles from "./BtnAndProfile.module.css"
import { useEffect, useState } from "react";
import { supabase } from "../supabaseConfig";
import JobCard from "../components/JobCard";

const JobsList = () => {
    const [fetchError, setFetchError] = useState(null)
    const [NewJobs, setNewJobs] = useState(null)

    useEffect(() => {
        const fetchNewJobs = async () => {
            const { data, error } = await supabase
            .from("NewJobs")
            .select()
            if(error) {
                setFetchError('could not fetch the jobs')
                setNewJobs(null)
                console.log(error)
            }
            if(data) {
                setNewJobs(data)
                setFetchError(null)
            }
        }

        fetchNewJobs()

    }, [])
    return(
        <>
        <div className={styles.textBtn}>
        <div>
            Jobs History
        </div>
        <Link to="/add_job"><button className={styles.btn}>New Job</button></Link>
        </div>
        {fetchError &&(<p>{fetchError}</p>)}
        {NewJobs && (
            <div className={styles.scrollDiv}>
                {NewJobs.map(NewJobs => (
                    <JobCard key={NewJobs.id} NewJobs={NewJobs}/>
                ))}
            </div>
        )}
        </>
    )
};
export default JobsList