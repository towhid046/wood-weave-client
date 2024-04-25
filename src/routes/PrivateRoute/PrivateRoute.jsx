import { useContext } from "react";
import { UserContext } from "../../providers/ContextProvider/ContextProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
