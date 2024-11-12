import { Navigate, Outlet, useParams } from "react-router-dom";

function PrivateRoute() {
  const isAuthenticated = false;
  const role = "teacher";
  const { role: pathRole } = useParams();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (pathRole && pathRole !== role) {
    return <Navigate to={`/${role}`} replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
