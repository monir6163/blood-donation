import { CirclesWithBar } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="text-center w-9 mx-auto">
        <CirclesWithBar width="50px" color="red" outerCircleColor="green" />
      </div>
    );
  }
  return user ? children : <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
