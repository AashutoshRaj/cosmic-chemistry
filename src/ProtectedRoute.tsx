import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./ContextApi/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[]; // ✅ Add this for role-based control
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth(); // ✅ Ensure user object contains `role`
  console.log("Authenticated:", isAuthenticated, "User:", user);

  // 🛑 If not authenticated → redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 🧩 Role-based check
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ If all good → show the protected content
  return children;
};

export default ProtectedRoute;
