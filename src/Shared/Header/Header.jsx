import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowHeight, setWindowHeight] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setWindowHeight(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav
            className={`list-none text-white bg-red-700 font-bold text-base shadow-md  ${
                windowHeight
                    ? "sticky top-0 w-full z-40 bg-main-dark text-white py-4"
                    : "py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="w-full flex items-center">
                        <div className="flex-shrink-0">
                            <NavLink
                                to="/"
                                className="flex flex-row items-center justify-center"
                            >
                                <img
                                    className="h-20"
                                    src={Logo}
                                    alt="Donate Blood"
                                />
                                <span className="text-white text-lg font-bold">
                                    Donate Blood
                                </span>
                            </NavLink>
                        </div>

                        <div className="ml-auto hidden lg:block">
                            <div className="ml-10 flex items-baseline space-x-2 xl:space-x-4">
                                <li className=" px-3 py-2 mx-2">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-main-yellow border-b-2 border-main-yellow"
                                                : "transition duration-150 hover:text-main-yellow"
                                        }
                                        to="/home"
                                    >
                                        হোম
                                    </NavLink>
                                </li>

                                <li className=" px-3 py-2 mx-2">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-main-yellow border-b-2 border-main-yellow"
                                                : "transition duration-150 hover:text-main-yellow"
                                        }
                                        to="/about"
                                    >
                                        রক্তের আবেদন তালিকা
                                    </NavLink>
                                </li>

                                <li className=" px-3 py-2 mx-2">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-main-yellow border-b-2 border-main-yellow"
                                                : "transition duration-150 hover:text-main-yellow"
                                        }
                                        to="/pricing"
                                    >
                                        রক্ত দাতাদের তালিকা
                                    </NavLink>
                                </li>

                                <li className=" px-3 py-2 mx-2">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-main-yellow border-b-2 border-main-yellow"
                                                : "transition duration-150 hover:text-main-yellow"
                                        }
                                        to="/contact"
                                    >
                                        রক্তের জন্য আবেদন করুন
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/get-quoter">
                                        <button
                                            type="button"
                                            className="primary-btn"
                                        >
                                            লগইন করুন
                                        </button>
                                    </NavLink>
                                </li>
                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex lg:hidden z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-main-yellow inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-50 hover:bg-main-yellow focus:outline-none "
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
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
                                    aria-hidden="true"
                                >
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
                leaveTo="opacity-0 scale-90"
            >
                {(ref) => (
                    <div className="lg:hidden" id="mobile-menu">
                        <div
                            ref-setter={ref}
                            className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                        >
                            <li className=" px-3 py-2 mx-2">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-main-yellow border-b-2 border-main-yellow"
                                            : "transition duration-150 hover:text-main-yellow"
                                    }
                                    to="/home"
                                >
                                    হোম
                                </NavLink>
                            </li>
                            <li className=" px-3 py-2 mx-2">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-main-yellow border-b-2 border-main-yellow"
                                            : "transition duration-150 hover:text-main-yellow"
                                    }
                                    to="/about"
                                >
                                    রক্তের আবেদন তালিকা
                                </NavLink>
                            </li>

                            <li className=" px-3 py-2 mx-2">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-main-yellow border-b-2 border-main-yellow"
                                            : "transition duration-150 hover:text-main-yellow"
                                    }
                                    to="/pricing"
                                >
                                    রক্ত দাতাদের তালিকা
                                </NavLink>
                            </li>
                            <li className=" px-3 py-2 mx-2">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-main-yellow border-b-2 border-main-yellow"
                                            : "transition duration-150 hover:text-main-yellow"
                                    }
                                    to="/contact"
                                >
                                    রক্তের জন্য আবেদন করুন
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/get-quotes">
                                    <button
                                        type="button"
                                        className="primary-btn"
                                    >
                                        লগইন করুন
                                    </button>
                                </NavLink>
                            </li>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
};

export default Header;
