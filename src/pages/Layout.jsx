import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import React,{useState} from "react";



const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const showContent = () => setMenuOpen(!menuOpen)

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.btnLayout}>
          <nav className={styles.nav}>
            <div className={styles.menu} onClick={showContent}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {menuOpen ? 
              <ul>
                <li>
                    <Link to="/">
                        <button className={styles.btn}>home</button>
                    </Link>
                </li>
                <li>
                  <Link to="/sign_in">
                    <button className={styles.btn}>Sign In</button>
                  </Link>
                </li>
                <li>
                  <Link to="/sign_up">
                    <button className={styles.btn}>Sign Up</button>
                  </Link>
                </li>
                <li>
                  <Link to="/sign_out">
                    <button className={styles.btn}>Sign out</button>
                  </Link>
                </li>
                <li>
                  <Link to="/road_master">
                    <button className={styles.btn}>Road Master</button>
                  </Link>
                </li>
                <li>
                  <Link to="/contractor">
                    <button className={styles.btn}>Contractor</button>
                  </Link>{" "}
                </li>
              </ul> : null}
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
