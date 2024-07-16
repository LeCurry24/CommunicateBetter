import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { Form } from "react-router-dom";
import styles from "./Sign.module.css"
import { Link } from "react-router-dom";



const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { sign_up } = useAuth();
    
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      console.log(email, password)
      const { error } = await sign_up(email, password);
      if (error) {
        alert(error.message);
      } else {
        alert("You have successfully signed up!");
      }
    };

    return(
        <div className={styles.div}>
            <Form onSubmit={handleSignUp} className={styles.loginForm}>
           <div className={styles.loginContain}>
                  <p className={styles.heading}>Sign Up</p>
                <label>
                  Email:
                    <input 
                    type="email.."
                    value={email}
                    placeholder="Email.."
                    onChange={(e) => setEmail(e.target.value)} 
                    className={styles.sign}/>
                </label>
                <label>
                  Password:
                    <input
                    type="password" 
                    value={password}
                    placeholder="Password.."
                    onChange={(e) => setPassword(e.target.value)} 
                    className={styles.sign}/>
                </label>
                <button type="submit" className={styles.button}>Sign Up</button>
           </div>
            </Form>
           <div className={styles.alreadyHaveAccount}>
           <label className={styles.labelText}>
                already have an account:
           </label>
                <Link to="/sign_in"><button className={styles.button}>Sign In</button></Link>
           </div>
        </div>
    )
}
export default SignUp