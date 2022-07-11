import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="text-white bg-slate-900 font-normal text-base shadow-md py-10 ">
      <div className="grid space-y-4 space-x-4 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <h2 className="text-white text-3xl font-bold font-grandHotel tracking-widest">
            <span className="text-red-500">Donate </span>Blood
          </h2>
          <p>
            Join us on a Villa Park Stadium Tour and Step behind the scenes, soak up the atmosphere
            and walk in the footsteps of your Villa heroes in an unforgettable
          </p>
          <div className="flex space-x-4">
            <BsFacebook className="transition text-xl cursor-pointer hover:text-orange" />
            <BsGithub className="transition text-xl cursor-pointer hover:text-orange" />
            <BsTwitter className="transition text-xl cursor-pointer hover:text-orange" />
            <BsLinkedin className="transition text-xl cursor-pointer hover:text-orange" />
          </div>
        </div>

        <div className="flex md:justify-center">
          <div className="">
            <h3 className="text-3xl mb-2">Quick Links</h3>
            <div className="flex flex-col list-none">
              <li className="flex items-center space-x-1 group">
                <MdNavigateNext />
                <Link className="transition group-hover:text-orange" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="flex items-center space-x-1 group">
                <MdNavigateNext />
                <Link className="transition group-hover:text-orange" to="/">
                  About Us
                </Link>
              </li>
              <li className="flex items-center space-x-1 group">
                <MdNavigateNext />
                <Link className="transition group-hover:text-orange" to="/">
                  Latest News
                </Link>
              </li>
              <li className="flex items-center space-x-1 group">
                <MdNavigateNext />
                <Link className="transition group-hover:text-orange" to="/">
                  Subscribe
                </Link>
              </li>
              <li className="flex items-center space-x-1 group">
                <MdNavigateNext />
                <Link className="transition group-hover:text-orange" to="/">
                  Our Policies
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="text-3xl mb-2">Newsletter</h3>
          <p>Join us on a Villa Park Stadium Tour and Step behind the scenes.</p>

          <div className="flex space-x-1 items-center rounded-lg p-2 border-2 border-lightBlue mt-4">
            <FaEnvelope className="text-lg text-lightBlue" />
            <input
              className="bg-transparent w-full focus:outline-none border-none focus:ring-0 px-2"
              type="text"
              placeholder="Your Email:"
            />
          </div>
          <button className="bg-red-600 text-white font-bold outline-none border-2 border-darkBlue rounded-lg px-6 py-2 mt-2 w-full shadow-lg hover:text-white hover:bg-teal-700 hover:border-teal-700">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="my-6" />

      <div className="flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-200 text-sm">
          &copy;{year}{' '}
          <span className="text-white text-sm font-bold">
            <span className="text-red-500">Donate </span>Blood
          </span>
          {''} || Developed by <AiFillHeart className="inline text-red-700" /> Monir Hossain
        </p>
      </div>
    </footer>
  );
};

export default Footer;
