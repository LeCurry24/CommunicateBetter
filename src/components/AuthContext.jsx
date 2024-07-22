import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    useEffect (() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            setSession(session);
        };

        getSession();

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const sign_up = (email, password) => {
        return supabase.auth.signUp ({email, password});
    };

    const signIn = (email, password) => {
        return supabase.auth.signInWithPassword ({email, password});
    };

    const signOut = () => {
        return supabase.auth.signOut();
    };

    return(
        <AuthContext.Provider value={{ session, sign_up, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};