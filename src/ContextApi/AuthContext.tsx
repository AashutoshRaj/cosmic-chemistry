import { createContext, useContext, useEffect, useState } from "react";


type AuthContextType = any;
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
interface AuthProviderProps {
    children:any;
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
 const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token' ) ? true : false);

  useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true);
           
        }
    }, [])


     const login = (token: string) => {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);

    }

     const logout = () => {
        localStorage.clear()
        localStorage.removeItem("token");
        setIsAuthenticated(false);


    }

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext)
