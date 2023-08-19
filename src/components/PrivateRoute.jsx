import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsAuthLoading,
  selectIsLoggedIn,
} from "../redux/auth/selectorauth";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsAuthLoading);

  const shouldRedirect = !isLoggedIn && !isLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
