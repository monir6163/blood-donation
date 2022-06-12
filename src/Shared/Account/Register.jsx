import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div className="max-w-xl md:mx-auto mx-5 bg-white shadow-2xl border rounded-lg h-auto py-5 mt-10">
      <div className="text-center">
        <h1 className="text-lg font-semibold tracking-wide mb-2 text-red-500">SIGN UP</h1>
        <h6 className="text-xs font-light">Welcome to Blood Donation.</h6>
      </div>
      <div className="text-center mx-2 pt-5 md:mx-20">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          className="w-full py-3 rounded-md shadow-2xl mb-6 pl-5"
        />

        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          className="w-full py-3 rounded-md shadow-2xl mb-6 pl-5"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full py-3 rounded-md shadow-2xl mb-6 pl-5"
        />

        <br />

        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          className="w-full py-3 rounded-md shadow-2xl mb-8 pl-5"
        />

        <br />

        <input
          type="button"
          value="SUBMIT"
          className="text-sm font-semibold bg-pink-600 py-2 px-3 rounded-md text-white hover:bg-indigo-600 mb-4"
        />

        <br />

        <h1 className="">
          Already have an account{' '}
          <NavLink to="/login" className="text-sm font-medium text-indigo-600">
            Sign In
          </NavLink>
        </h1>
      </div>
    </div>
  );
};

export default Register;
