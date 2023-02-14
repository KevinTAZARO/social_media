import { createContext, useEffect, useState } from "react";
import PexelsUser from "../assets/pexels-user.jpg";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
        setCurrentUser({ 
            id:1,
            name:"Kev Admin",
            profilePic: PexelsUser,
        });
    };
    
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);


    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};