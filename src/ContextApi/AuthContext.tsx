import { createContext, useContext, useEffect, useState } from "react";


type AuthContextType = any;
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
interface AuthProviderProps {
  children: any;
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') ? true : false);
 const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  });
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);

    }
  }, [])

 // set user detail
  function setUserDetail(userData: any) {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  }

  // set token and user
  function setTokenAndUser(userData: any, token: string) {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData);
    setIsAuthenticated(true);
  }

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  }
  
  const logout = () => {
    localStorage.clear()
    localStorage.removeItem("token");
    setIsAuthenticated(false);
     setUser(null);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout, user, setUserDetail, setTokenAndUser, }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext)


