import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [division, setDivision] = useState([]);
  const [district, setDistrict] = useState([]);
  const [dristicName, setDristicName] = useState([]);
  const [upzilla, setUpzilla] = useState([]);
  const [upzillaName, setUpzillaName] = useState([]);
  const [union, setUnion] = useState([]);
  const [unionName, setUnionName] = useState([]);
  useEffect(() => {
    axios('http://localhost:5000/division/all')
      .then((data) => {
        setDivision(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios('http://localhost:5000/district/all')
      .then((data) => {
        setDistrict(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios('http://localhost:5000/upazila/all')
      .then((data) => {
        setUpzilla(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios('http://localhost:5000/union/all')
      .then((data) => {
        setUnion(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handledivision = (e) => {
    const divisionID = e.target.value;
    const data = district.filter((item) => item.division_id === divisionID);
    setDristicName(data);
  };
  const handledistrict = (e) => {
    const districtID = e.target.value;
    const data = upzilla.filter((item) => item.district_id === districtID);
    setUpzillaName(data);
  };
  const handleunion = (e) => {
    const upzillaID = e.target.value;
    const data = union.filter((item) => item.upazilla_id === upzillaID);
    setUnionName(data);
  };

  return (
    <div className="max-w-4xl md:mx-auto mx-2 bg-white shadow-2xl border rounded-lg h-auto py-5 mt-10">
      <div className="text-center">
        <h1 className="text-lg font-semibold tracking-wide mb-2 text-red-500">নিবন্ধন করুন</h1>
        <h6 className="text-xs font-light">রক্তদানে স্বাগতম।</h6>
      </div>
      <div className="mx-2 pt-5 md:mx-2">
        <form className="w-full p-6 mx-auto" action="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm tracking-wide mb-3">
                নাম <span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="নাম"
              />
            </div>
            <div>
              <label className="text-sm tracking-wide mb-2">
                বয়স <span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="বয়স"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 md:pt-4">
            <div>
              <label className="text-sm tracking-wide mb-6">
                রক্তের গ্রুপ <span className="text-red-600">*</span>
              </label>
              <select name="" id="" className="w-full py-2 border rounded-lg focus:outline-none">
                <option value="">রক্তের গ্রুপ</option>
                <option value="এ+">এ+</option>
                <option value="এ-">এ-</option>
                <option value="বি+">বি+</option>
                <option value="বি-">বি-</option>
                <option value="এবি+">এবি+</option>
                <option value="এবি-">এবি-</option>
                <option value="ও+">ও+</option>
                <option value="ও-">ও-</option>
              </select>
            </div>
            <div>
              <label className="text-sm tracking-wide mb-2">
                বয়স <span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="বয়স"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 md:pt-4">
            <div>
              <label className="text-sm tracking-wide mb-6">
                নম্বর <span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="নম্বর"
              />
            </div>
            <div>
              <label className="text-sm tracking-wide mb-2">
                বিভাগ <span className="text-red-600">*</span>{' '}
              </label>
              <select
                name=""
                id=""
                className="w-full py-2 border rounded-lg focus:outline-none"
                onChange={(e) => handledivision(e)}>
                <option>বিভাগ বাছাই করুন</option>
                {division.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.bn_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 md:pt-4">
            <div>
              <label className="text-sm tracking-wide mb-2">
                জেলা <span className="text-red-600">*</span>{' '}
              </label>
              <select
                name=""
                id=""
                className="w-full py-2 border rounded-lg focus:outline-none"
                onChange={(e) => handledistrict(e)}>
                <option>জেলা বাছাই করুন</option>
                {dristicName.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.bn_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm tracking-wide mb-2">
                উপজেলা <span className="text-red-600">*</span>{' '}
              </label>
              <select
                name=""
                id=""
                className="w-full py-2 border rounded-lg focus:outline-none"
                onChange={(e) => handleunion(e)}>
                <option>উপজেলা বাছাই করুন</option>
                {upzillaName.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.bn_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 md:pt-4">
            <div>
              <label className="text-sm tracking-wide mb-2">
                ইউনিয়ন <span className="text-red-600">*</span>{' '}
              </label>
              <select name="" id="" className="w-full py-2 border rounded-lg focus:outline-none">
                <option>ইউনিয়ন বাছাই করুন</option>
                {unionName.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.bn_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <div className="text-center">
            <input
              type="button"
              value="নিবন্ধন করুন"
              className="text-sm bg-pink-600 py-2 px-3 rounded-md text-white hover:bg-indigo-600 mb-4"
            />
          </div>
        </form>

        <br />
        <h1 className="text-center">
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
