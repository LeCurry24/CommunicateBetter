import { Form } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const sign_in = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, session } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await signIn(email, password);
    if (error) {
      alert(error.message);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);


    return (
        <div>
            <Form onSubmit={handleSignIn}>
                <label>
                    Email:
                    <input type="email"
                    placeholder="Email.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="sign-in"/>
                </label>
                <label>
                    Password:
                    <input type="password"
                    placeholder="Password.."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="sign-in" />
                </label>
                <button type="submit">Sign In</button>
            </Form>
        </div>
    );
};
export default sign_in