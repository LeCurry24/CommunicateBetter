import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.homeDiv}>
        <h1>Welcome to the</h1>
        <p>choo choo chat</p>
      </div>
      <img className={styles.imgTop} src="./public/HomePagePic.jpg"/>
      <img className={styles.imgBottom} src="./public/HomePagePhoto.jpg"/>
    </div>
  );
};

export default Home;
