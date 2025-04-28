import { Navigate, Outlet } from "react-router-dom";  // Make sure to import Navigate
import { useAuth } from "../contexts/AuthContext";  // Import the useAuth hook

const ProtectedRoute = () => {
  const { user } = useAuth(); // Get the user object from the context

  if (!user) {
    // If no user, redirect to the login page
    return <Navigate to="/admin-login" replace />;
  }

  if (user && user.role !== "admin") {
    // If the user is not an admin, redirect them (or show an error page)
    return <Navigate to="/not-authorized" replace />;
  }

  // If the user is logged in and is an admin, allow access to the route
  return <Outlet />;
};

export default ProtectedRoute;
