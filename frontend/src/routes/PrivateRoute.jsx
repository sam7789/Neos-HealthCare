import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const userStatus = useSelector((state) => state.user.isUserLoggedIn);

  if (!userStatus) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};
