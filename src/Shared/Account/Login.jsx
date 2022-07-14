import axios from 'axios';
import { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { CirclesWithBar } from 'react-loader-spinner';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../Hooks/useAuth';
import Top from '../Top';

const Login = () => {
  useEffect(() => {
    document.title =
      'রক্ত দিতে / রক্ত নিতে ইচ্ছুক : জীবন আমাদের রক্তে গড়া, রক্তে গড়া প্রাণ। রক্ত দিয়ে বাঁচাবো মোরা শত শত প্রাণ।';
  }, []);
  const { setShouldUpdate, user, setIsLoading, isLoading } = useAuth();
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const location = useLocation();
  if (user) {
    const redirect = location.state || '/';
    return <Navigate to={redirect} replace />;
  }

  const handlelogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      number,
      password
    };
    await axios
      .post('https://baroque-fromage-48977.herokuapp.com/user/login', data)
      .then((res) => {
        if (res) {
          toast.success('User Login SuccessFull !');
          localStorage.setItem('token', res.data.token);
          setShouldUpdate((prevState) => !prevState);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (err?.request?.status === 401) {
          toast.error('Authentication failed.');
          setIsLoading(false);
        }
      });
  };
  return (
    <>
      <Top />
      <div className="max-w-xl md:mx-auto mx-5 bg-white shadow-2xl border rounded-lg h-auto py-5 mt-3 mb-3">
        <div className="text-center">
          <div
            onClick={() => history('/')}
            className="top-2 left-0 btn px-4 animate-bounce z-10 cursor-pointer">
            <GrClose size="1.5em" />
          </div>
          <h1 className="text-lg font-semibold tracking-wide mb-2 text-red-500">লগইন করুন</h1>
          <h6 className="text-xs font-light">রক্তদানে স্বাগতম।</h6>
        </div>
        <div className="mx-2 pt-5 md:mx-20">
          <form onSubmit={handlelogin}>
            <div>
              <label className="text-sm tracking-wide mb-6">
                নাম্বার <span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => setNumber(e.target.value)}
                placeholder="নাম্বার লিখুন"
              />
            </div>

            <div className="mt-3">
              <label className="text-sm tracking-wide mb-2">
                পাসওয়ার্ড <span className="text-red-600">*</span>{' '}
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="পাসওয়ার্ড লিখুন"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />

            <div className="text-center mb-3">
              {isLoading ? (
                <div className="text-center w-9 mx-auto">
                  <CirclesWithBar width="50px" color="red" outerCircleColor="green" />
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  লগইন করুন
                </button>
              )}
            </div>
          </form>
          <br />
          <h1 className="text-center">
            আপনার একটি একাউন্ট নেই{' '}
            <NavLink to="/register" className="text-sm font-medium text-indigo-600">
              নিবন্ধন করুন
            </NavLink>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Login;
