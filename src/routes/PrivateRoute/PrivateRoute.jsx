import { useContext } from "react";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation()
  if (loading) {
    return;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location?.pathname} to={"/login"} />;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
