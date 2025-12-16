import { createContext, useEffect, useState } from "react"

const AuthAdminContext = createContext({})

const AuthAdminContextApi = ({ children }: any) => {

    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(localStorage.getItem('role_id') === '1');

    useEffect(() => {
      if (localStorage.getItem('adminToken')) {
        setIsAdminAuthenticated(true);      
      }
    });

  return (
    <div>
        <AuthAdminContext.Provider value={{isAdminAuthenticated, setIsAdminAuthenticated}}>           
            {children}
        </AuthAdminContext.Provider>

    </div>
  )
}

export default AuthAdminContextApi
