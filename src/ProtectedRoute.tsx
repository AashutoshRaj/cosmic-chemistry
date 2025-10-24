import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './ContextApi/AuthContext';

const ProtectedRoute = ({ children }:any) => {
  const location = useLocation();
  const {isAuthenticated} = useAuth();
  console.log(isAuthenticated)

  if (!isAuthenticated) {
    // Redirect to login and save the path
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};


export default ProtectedRoute;