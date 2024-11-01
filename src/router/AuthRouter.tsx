import { Navigate, Outlet } from "react-router";

function AuthRouter() {
  const loading = false;
  const isValid = false;
  const role = "login";

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isValid) {
    return <Navigate to={`/${role}`} />;
  }

  return <Outlet />;
}

export default AuthRouter;
