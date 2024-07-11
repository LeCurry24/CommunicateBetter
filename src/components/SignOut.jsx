import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";



const sign_out = () => {
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



    return (
        <button onClick={handleSignOut}>
            Sign Out
        </button>
    )
};
export default sign_out