import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./Sign.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("contractor");
  const { signIn, session } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await signIn(email, password);
    if (error) {
      alert(error.message);
    } else {
      navigate(`/${role}`);
    }
  };

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);


  return (
    <div className={styles.div}>
                <Form onSubmit={handleSignIn} className={styles.loginForm}>
                    <div className={styles.loginContain}>
                    <p className={styles.heading}>Sign In</p>
                        <label>
                            Email:
                            <input type="email"
                            value={email}
                            placeholder="Email.."
                            onChange={(e) => setEmail(e.target.value)} 
                            className={styles.sign}/>
                        </label>
                        <label>
                            Password:
                            <input type="password"
                            value={password}
                            placeholder="Password..."
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.sign} />
                        </label>
                        <label>
                            Choose an role:
                            <select value={role} onChange={(e) => setRole(e.target.value)} className={styles.sign}>
                            <option value="road_master">Roadmaster</option>
                            <option value="contractor">Contractor</option>
                            </select>
                        </label>
                        <button type="submit" className={styles.button}>Sign In</button>
                    </div>
                        <label className={styles.labelText}>
                                Need an account?:
                        </label>
                                <Link to="/sign_up"><button className={styles.button}>Sign up</button></Link>
                </Form>
        </div>
    );
};
export default SignIn