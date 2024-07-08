import React, { useState } from "react";
import { useAuth } from "../AuthContext";



const signUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useAuth();
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      const { error } = await signUp(email, password);
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
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="signUp"/>
                </label>
                <label>
                    Password:
                    <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    className="signUp"/>
                </label>
            </Form>
        </div>
    )
}
export default signUp