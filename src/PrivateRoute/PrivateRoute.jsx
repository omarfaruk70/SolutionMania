import PropTypes from "prop-types";
import { useContext } from "react";
import { Authcontext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation()
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <span className="text-7xl loading loading-bars loading-lg"></span>;
      </div>
    );
  }
  if (!user?.email) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
