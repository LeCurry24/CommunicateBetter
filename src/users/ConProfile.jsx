import styles from "./BtnAndProfile.module.css"




const con_profile = () => {
  return (
    <div className={styles.profile_div}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.image}></div>
          <div>
            <p className={styles.name}>John Doe</p>
          </div>
        </div>
        <p>Contractor</p>
        <button className={styles.button}>Follow</button>
      </div>
    </div>
  );
};
export default con_profile;
