import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
    const [isauth, setIsAuth] = useState(false);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleLogin = (value) => {
        setIsAuth(true);
        setName(value);
    };

    const handleLogout = () => {
        setIsAuth(false);
        setName("");
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ isauth, name, handleLogin, handleLogout }} >
            {children}
        </AuthContext.Provider>
    )
};