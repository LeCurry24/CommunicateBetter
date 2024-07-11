import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { Form } from "react-router-dom";



const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { sign_up } = useAuth();
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      const { error } = await sign_up(email, password);
      if (error) {
        alert(error.message);
      } else {
        alert("You have successfully signed up!");
      }
    };

    return(
        <div>
            <Form onSubmit={handleSignUp}>
                <label>
                    Email:
                    <input 
                    type="email.."
                    placeholder="Email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="sign-up"/>
                </label>
                <label>
                    Password:
                    <input 
                    type="password" 
                    placeholder="Password.."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    className="sign-up"/>
                </label>
                <button type="submit">Sign Up</button>
            </Form>
        </div>
    )
}
export default SignUp