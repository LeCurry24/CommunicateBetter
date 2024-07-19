import styles from "./JobCard.module.css"


const JobCard = ({ NewJobs }) => {
    return(
        <div className={styles.contain}>
            <p>{NewJobs.state}</p>
            <p>{NewJobs.city}</p>
            <p>{NewJobs.date}</p>
            <button>delete</button>
        </div>
    )
}
export default JobCard