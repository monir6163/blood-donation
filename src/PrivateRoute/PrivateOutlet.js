import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

function PrivateOutlet() {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return `Loading................`;
  }
  return user ? <Outlet /> : <Navigate to="/login" state={location.pathname} replace />;
}

export default PrivateOutlet;
