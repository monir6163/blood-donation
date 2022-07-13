/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AuthProvider from './context/AuthProvider';
import useAuthentication from './Hooks/useAuthentication';
import AllUser from './Pages/Home/AllUser';
import Home from './Pages/Home/Home';
import Notfound from './Pages/NotFound/Notfound';
import Requestblood from './Pages/RequestBlood/Requestblood';
import RequestBloodList from './Pages/RequestBlood/RequestBloodList';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './Shared/Account/Login';
import Profile from './Shared/Account/Profile';
import Register from './Shared/Account/Register';
import Setting from './Shared/Account/Setting';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
function App() {
  const authentication = useAuthentication();
  return (
    <div className="App">
      <AuthProvider value={authentication}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/requestbloodlist" element={<RequestBloodList />} />
          <Route
            path="/requestBlood"
            element={
              <PrivateRoute>
                <Requestblood />
              </PrivateRoute>
            }
          />
          {/* <Route path="/*" element={<PrivateOutlet />}>
            <Route path="requestbloodlist" element={<RequestBloodList />} />
          </Route> */}
          <Route path="/alldonar" element={<AllUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/setting"
            element={
              <PrivateRoute>
                <Setting />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
