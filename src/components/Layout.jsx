import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import React,{useState} from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";




const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { signOut } = useAuth();
    const navigate = useNavigate();


    const handleSignOut = async () => {
      const { error } = await signOut();
      if (error) {
        alert(error.message);
      } else {
        navigate("/sign_in");
      }
    };

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
                  <Link to="/road_master">
                    <button className={styles.btn}>Road Master</button>
                  </Link>
                </li>
                <li>
                  <Link to="/contractor">
                    <button className={styles.btn}>Contractor</button>
                  </Link>
                </li>
                <li>
                <button onClick={handleSignOut} className={styles.btn} >
                  Sign Out
                </button>
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
