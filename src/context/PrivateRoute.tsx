import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

function PrivateRoute() {
  const { auth } = useAuth();

  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export { PrivateRoute };
