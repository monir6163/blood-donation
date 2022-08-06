import { Transition } from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';
import useAuth from '../../Hooks/useAuth';
import Logo from '../../images/logo.png';

function Header() {
  const { profile, user, logout, setShouldUpdate } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropdown((prevState) => !prevState);
      }
    }
    // Bind the event listener
    if (dropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdown]);
  const location = useNavigate();
  const [windowHeight, setWindowHeight] = useState(false);
  const handleLogout = async () => {
    await logout();
    setShouldUpdate((prevState) => !prevState);
    toast.success('User Logout !');
    return location('/login');
  };
  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`list-none text-white bg-red-700 font-bold text-base shadow-md  ${
        windowHeight ? 'sticky top-0 w-full z-40 bg-main-dark text-white py-2' : 'py-2'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-full flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex flex-row items-center justify-center">
                <img className="h-20" src={Logo} alt="Donate Blood" />
                <span className="text-white text-lg font-bold">Donate Blood</span>
              </a>
            </div>

            <div className="ml-auto hidden lg:block">
              <div className="ml-10 flex items-center space-x-2 xl:space-x-4">
                <li className=" px-3 py-2 mx-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-main-yellow border-b-2 border-main-yellow'
                        : 'transition duration-150 hover:text-main-yellow'
                    }
                    to="/home">
                    হোম
                  </NavLink>
                </li>
                {user?.donar === '2' ? (
                  <li className=" px-3 py-2 mx-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-main-yellow border-b-2 border-main-yellow'
                          : 'transition duration-150 hover:text-main-yellow'
                      }
                      to="/requestBlood">
                      রক্তের জন্য অনুরোধ পাঠান
                    </NavLink>
                  </li>
                ) : !user ? (
                  <li className=" px-3 py-2 mx-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-main-yellow border-b-2 border-main-yellow'
                          : 'transition duration-150 hover:text-main-yellow'
                      }
                      to="/requestBlood">
                      রক্তের জন্য অনুরোধ পাঠান
                    </NavLink>
                  </li>
                ) : (
                  ''
                )}

                <li className=" px-3 py-2 mx-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-main-yellow border-b-2 border-main-yellow'
                        : 'transition duration-150 hover:text-main-yellow'
                    }
                    to="/requestbloodlist">
                    রক্তের আবেদন তালিকা
                  </NavLink>
                </li>

                <li className=" px-3 py-2 mx-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-main-yellow border-b-2 border-main-yellow'
                        : 'transition duration-150 hover:text-main-yellow'
                    }
                    to="/alldonated">
                    রক্ত দাতাদের তালিকা
                  </NavLink>
                </li>
                {!user?.name ? (
                  <li>
                    <NavLink to="/login">
                      <button type="button" className="primary-btn">
                        রক্ত দিতে / রক্ত নিতে ইচ্ছুক
                      </button>
                    </NavLink>
                  </li>
                ) : (
                  <div className="relative inline-block text-left" ref={wrapperRef}>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => setDropdown(!dropdown)}
                        type="button"
                        className="inline-flex justify-center items-center w-full "
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true">
                        <div className="py-1 px-4 text-sm text-gray-700 flex flex-col items-center justify-center space-y-2 animate-bounce">
                          {profile?.imageUrl && (
                            <div className="w-8 h-8 rounded-full mx-auto profile">
                              <RenderSmoothImage src={profile?.imageUrl} alt={profile?.name} />
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                    {dropdown && (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1">
                        <div className="py-1 px-4 text-sm text-gray-700 flex flex-col items-center justify-center space-y-2">
                          {profile?.imageUrl && (
                            <div className="w-24 h-24 rounded-full border border-rose-600 mx-auto profile">
                              <RenderSmoothImage src={profile?.imageUrl} alt={profile?.name} />
                            </div>
                          )}
                          <h5> {profile?.name}</h5>
                        </div>
                        <ul className="py-1 text-sm text-center">
                          <NavLink
                            className="flex py-2 items-center justify-center text-black px-2 hover:bg-gray-700 hover:text-white"
                            to="/profile"
                            onClick={() => setDropdown(false)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-user-circle"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <circle cx="12" cy="12" r="9"></circle>
                              <circle cx="12" cy="10" r="3"></circle>
                              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                            </svg>
                            <p className="block ml-1 capitalize">profile</p>
                          </NavLink>
                          <NavLink
                            onClick={() => setDropdown(false)}
                            className="flex py-2 items-center justify-center text-black px-2 hover:bg-gray-700 hover:text-white"
                            to="/setting">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-settings"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            <p className="block ml-1 capitalize">settings</p>
                          </NavLink>
                        </ul>
                        <div className="py-1">
                          <button
                            onClick={handleLogout}
                            type="button"
                            className="font-medium mr-2 rounded-lg transition focus:outline-none text-gray-900 bg-white border border-gray-200 hover:text-blue-700  dark:bg-gray-800    inline-flex items-center w-full py-2 px-4 text-sm  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white capitalize justify-center">
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-main-yellow inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-50 hover:bg-main-yellow focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-500 transform"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90">
        {(ref) => (
          <div className="lg:hidden z-10" id="mobile-menu">
            <div ref-setter={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li className=" px-3 py-2 mx-2">
                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-main-yellow border-b-2 border-main-yellow'
                      : 'transition duration-150 hover:text-main-yellow'
                  }
                  to="/home">
                  হোম
                </NavLink>
              </li>
              {user?.donar === '2' ? (
                <li className=" px-3 py-2 mx-2">
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-main-yellow border-b-2 border-main-yellow'
                        : 'transition duration-150 hover:text-main-yellow'
                    }
                    to="/requestBlood">
                    রক্তের জন্য অনুরোধ পাঠান
                  </NavLink>
                </li>
              ) : !user ? (
                <li className=" px-3 py-2 mx-2">
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-main-yellow border-b-2 border-main-yellow'
                        : 'transition duration-150 hover:text-main-yellow'
                    }
                    to="/requestBlood">
                    রক্তের জন্য অনুরোধ পাঠান
                  </NavLink>
                </li>
              ) : (
                ''
              )}

              <li className=" px-3 py-2 mx-2">
                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-main-yellow border-b-2 border-main-yellow'
                      : 'transition duration-150 hover:text-main-yellow'
                  }
                  to="/requestbloodlist">
                  রক্তের আবেদন তালিকা
                </NavLink>
              </li>

              <li className=" px-3 py-2 mx-2">
                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-main-yellow border-b-2 border-main-yellow'
                      : 'transition duration-150 hover:text-main-yellow'
                  }
                  to="/alldonated">
                  রক্ত দাতাদের তালিকা
                </NavLink>
              </li>

              {!user?.name ? (
                <li>
                  <NavLink onClick={() => setIsOpen(!isOpen)} to="/login">
                    <button type="button" className="primary-btn">
                      রক্ত দিতে / রক্ত নিতে ইচ্ছুক
                    </button>
                  </NavLink>
                </li>
              ) : (
                <div className="relative inline-block text-left" ref={wrapperRef}>
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => setDropdown(!dropdown)}
                      type="button"
                      className="inline-flex justify-center items-center w-full "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true">
                      <div className="py-1 px-4 text-sm text-gray-700 flex flex-col items-center justify-center space-y-2 animate-bounce">
                        {profile?.imageUrl && (
                          <div className="w-8 h-8 rounded-full mx-auto profile">
                            <RenderSmoothImage src={profile?.imageUrl} alt={profile?.name} />
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                  {dropdown && (
                    <div
                      className="origin-top-right absolute md:right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 focus:outline-none mobile_z"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1">
                      <div className="py-1 px-4 text-sm text-gray-700 flex flex-col items-center justify-center space-y-2 z-50">
                        {profile?.imageUrl && (
                          <div className="w-24 h-24 rounded-full border border-rose-600 mx-auto profile">
                            <RenderSmoothImage src={profile?.imageUrl} alt={profile?.name} />
                          </div>
                        )}
                        <h5> {profile?.name}</h5>
                      </div>
                      <ul className="py-1 text-sm text-center">
                        <NavLink
                          onClick={() => setIsOpen(!isOpen)}
                          to="/profile"
                          className="flex py-2 items-center justify-center text-black px-2
                          hover:bg-gray-700 hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user-circle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                          </svg>
                          <p className="block ml-1 capitalize">profile</p>
                        </NavLink>
                        <NavLink
                          onClick={() => setIsOpen(!isOpen)}
                          className="flex py-2 items-center justify-center text-black px-2 hover:bg-gray-700 hover:text-white"
                          to="/setting">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-settings"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <p className="block ml-1 capitalize">settings</p>
                        </NavLink>
                      </ul>
                      <div className="py-1">
                        <button
                          onClick={handleLogout}
                          type="button"
                          className="font-medium mr-2 rounded-lg transition focus:outline-none text-gray-900 bg-white border border-gray-200 hover:text-blue-700  dark:bg-gray-800    inline-flex items-center w-full py-2 px-4 text-sm  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white capitalize justify-center">
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Header;
