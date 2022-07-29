import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';
import useAuth from '../../Hooks/useAuth';
const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch(`https://baroque-fromage-48977.herokuapp.com/user/${user?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.data);
      });
  }, [profile, user?.id]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');
  const [donarTimes, setDonarTimes] = useState('');
  const [division, setDivision] = useState([]);
  const [divisionId, setDivisionID] = useState();
  const [district, setDistrict] = useState([]);
  const [dristicName, setDristicName] = useState();
  const [districtId, setDistrictID] = useState();
  const [upzilla, setUpzilla] = useState([]);
  const [upzillaName, setUpzillaName] = useState();
  const [upazilaId, setUpzillaID] = useState();
  const [union, setUnion] = useState([]);
  const [unionName, setUnionName] = useState();
  const [unionId, setUnionID] = useState();
  const [pc, setPc] = useState();
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const allValue = {
    name: name ? name : profile?.name,
    age: age ? age : profile?.age,
    number: number ? number : profile?.number,
    donarTimes: donarTimes ? donarTimes : profile?.donarTimes,
    divisionId: divisionId ? divisionId : profile?.divisionId?._id,
    districtId: districtId ? districtId : profile?.districtId?._id,
    upazilaId: upazilaId ? upazilaId : profile?.upazilaId?._id,
    unionId: unionId ? unionId : profile?.unionId?._id,
    pc: pc ? pc : profile?.pc
  };
  console.log(allValue);
  useEffect(() => {
    if (toggle) {
      if (pc) {
        setUnionID();
      }
    }
    if (unionId) {
      setPc();
    }
  }, [pc, unionId, toggle]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(allValue);
    // return;
    const updateUrl = `https://baroque-fromage-48977.herokuapp.com/user/update/${profile._id}`;
    axios
      .patch(updateUrl, { allValue })
      .then((res) => {
        if (res) {
          if (res) {
            toast.success('Profile Update SuccessFull !');
          }
          setShowModal(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err.status === 500) {
          toast.error('Server Error !');
        }
        setLoading(false);
      });
  };

  const donarTime = [
    {
      id: '1',
      time: '১'
    },
    {
      id: '2',
      time: '২'
    },
    {
      id: '3',
      time: '৩'
    },
    {
      id: '৪',
      time: '৪'
    },
    {
      id: '৫',
      time: '৫'
    },
    {
      id: '৬',
      time: '৬'
    },
    {
      id: '৭',
      time: '৭'
    },
    {
      id: '৮',
      time: '৮'
    },
    {
      id: '৯',
      time: '৯'
    },
    {
      id: '১০',
      time: '১০'
    }
  ];

  useEffect(() => {
    axios('https://baroque-fromage-48977.herokuapp.com/division/all')
      .then((data) => {
        setDivision(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios('https://baroque-fromage-48977.herokuapp.com/district/all')
      .then((data) => {
        setDistrict(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios('https://baroque-fromage-48977.herokuapp.com/upazila/all')
      .then((data) => {
        setUpzilla(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios('https://baroque-fromage-48977.herokuapp.com/union/all')
      .then((data) => {
        setUnion(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handledivision = (e) => {
    const divisionID = e.target.value;
    const selectedDivision = division.find((item) => e.target.value === item.id);
    setDivisionID(selectedDivision._id);
    const data = district.filter((item) => item.division_id === divisionID);
    setDristicName(data);
  };
  const handledistrict = (e) => {
    const districtID = e.target.value;
    const selectedDistrict = district.find((item) => e.target.value === item.id);
    setDistrictID(selectedDistrict._id);
    const data = upzilla.filter((item) => item.district_id === districtID);
    setUpzillaName(data);
  };
  const handleunion = (e) => {
    const upzillaID = e.target.value;
    const selectedUpzilla = upzilla.find((item) => e.target.value === item.id);
    setUpzillaID(selectedUpzilla._id);
    const data = union.filter((item) => item.upazilla_id === upzillaID);
    setUnionName(data);
  };
  const handleunionId = (e) => {
    const selectedUnion = union.find((item) => e.target.value === item.id);
    setUnionID(selectedUnion._id);
  };
  return (
    <>
      <section className="flex justify-center items-center h-[28rem] ">
        <div className="max-w-2xl md:mx-auto mx-5 bg-white shadow-2xl border rounded-lg max-h-2xl py-5 mt-3 mb-3 flex justify-center items-center">
          <div className="flex flex-col md:flex-row lg:w-[40rem] w-full">
            <div className="flex-1 md:border-r-2 text-center">
              <div className="text-center p-2">
                <div className="top-2 px-4 animate-bounce text-red-600 z-10 text-xl font-semibold">
                  {profile?.bloodGroup}
                </div>
                {profile?.imageUrl && (
                  <div className="w-28 h-28 rounded-full mx-auto">
                    <RenderSmoothImage src={profile?.imageUrl} alt={profile?.name} />
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-center p-2">
                <div className="">
                  <div className="text-center md:text-right">
                    <button
                      className="bg-pink-700 text-white active:bg-pink-600 font-bold capitalize text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(true)}>
                      প্রোফাইল আপডেট করুন
                    </button>
                  </div>
                  <div className="grid grid-cols-12 md:gap-4 mt-3 mb-3">
                    <div className="col-span-6 flex flex-col text-left mx-auto">
                      <div className="font-semibold text-sm">
                        নাম: <span className="eng">{profile?.name}</span>
                      </div>
                      <div className="font-semibold text-sm">
                        নাম্বার: <span className="eng">{profile?.number}</span>
                      </div>
                      <div className="font-semibold text-sm">
                        বয়স:{' '}
                        <span className="eng">
                          {profile?.age} <span className="font-normal">বছর</span>{' '}
                        </span>
                      </div>
                      <div className="font-semibold text-sm">
                        রক্ত দিয়েছেন:{' '}
                        <span className="eng">
                          {profile?.donarTimes}
                          {''}
                          <span className="font-normal"> বার</span>
                        </span>
                      </div>
                    </div>

                    <div className="col-span-6 flex flex-col text-left mx-auto">
                      <div className="font-semibold text-sm">
                        বিভাগ:{' '}
                        <span className="eng font-normal">{profile?.divisionId?.bn_name}</span>
                      </div>
                      <div className="font-semibold text-sm">
                        জেলা:{' '}
                        <span className="eng font-normal">{profile?.districtId?.bn_name}</span>
                      </div>
                      <div className="font-semibold text-sm">
                        উপজেলা:{' '}
                        <span className="eng font-normal">{profile?.upazilaId?.bn_name}</span>
                      </div>
                      <div className="font-semibold text-sm">
                        {profile?.unionId ? 'ইউনিয়ন' : 'পৌর / সিটি'}:{' '}
                        <span className="eng font-normal">
                          {profile?.unionId?.bn_name ? profile?.unionId?.bn_name : profile?.pc}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showModal ? (
          <>
            <form className="p-3" onSubmit={handleSubmit}>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">নাম: {profile?.name}</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}>
                        <span className="bg-transparent animate-bounce text-slate-900 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-1 gap-4 items-center">
                        <div className="p-3">
                          <div className="w-full rounded overflow-hidden ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                              <div className="">
                                <label className="text-sm tracking-wide mb-3">
                                  নাম বাংলায় অথবা English <span className="text-red-600">*</span>
                                </label>
                                <input
                                  id="name"
                                  onChange={(e) => setName(e.target.value)}
                                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  type="text"
                                  placeholder="নাম বাংলায় অথবা English"
                                  defaultValue={profile?.name}
                                  required={true}
                                />
                              </div>
                              <div>
                                <label className="text-sm tracking-wide mb-3">
                                  নাম্বার বাংলায় অথবা English<span className="text-red-600">*</span>
                                </label>
                                <input
                                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  type="text"
                                  placeholder="নাম্বার বাংলায় অথবা English"
                                  id="number"
                                  defaultValue={profile?.number}
                                  onChange={(e) => {
                                    setNumber(e.target.value);
                                  }}
                                  required={true}
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                              <div>
                                <label className="text-sm tracking-wide mb-3">
                                  বয়স বাংলায় অথবা English <span className="text-red-600">*</span>
                                </label>
                                <input
                                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  type="text"
                                  placeholder="বয়স বাংলায় অথবা English"
                                  id="age"
                                  defaultValue={profile?.age}
                                  onChange={(e) => {
                                    setAge(e.target.value);
                                  }}
                                  required={true}
                                />
                              </div>
                              <div>
                                <label className="text-sm tracking-wide mb-6">
                                  রক্ত দিয়েছেন <span className="text-red-600">*</span>
                                </label>
                                <select
                                  name=""
                                  id="donarTimes"
                                  key={profile?.donarTimes}
                                  defaultValue={profile?.donarTimes}
                                  onChange={(e) => {
                                    setDonarTimes(e.target.value);
                                  }}
                                  required={true}
                                  className="w-full py-2 border rounded-lg focus:outline-none">
                                  {donarTime.map((item, index) => (
                                    <option key={index} value={item.time}>
                                      {item.time} (বার)
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                              <div>
                                <label className="text-sm tracking-wide mb-2">
                                  বিভাগ বর্তমান : {profile?.divisionId?.bn_name}{' '}
                                  <span className="text-red-600">*</span>{' '}
                                </label>
                                <select
                                  name=""
                                  id=""
                                  onChange={(e) => handledivision(e)}
                                  className="w-full py-2 border rounded-lg focus:outline-none">
                                  <option hidden>বিভাগ পরিবর্তন করুন</option>
                                  {division?.map((item) => (
                                    <option key={item.id} value={item.id}>
                                      {item.bn_name}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div>
                                <label className="text-sm tracking-wide mb-2">
                                  জেলা বর্তমান : {profile?.districtId?.bn_name}{' '}
                                  <span className="text-red-600">*</span>{' '}
                                </label>
                                <select
                                  name=""
                                  id=""
                                  key={profile?.districtId?.id}
                                  defaultValue={profile?.districtId?.id}
                                  className="w-full py-2 border rounded-lg focus:outline-none"
                                  onChange={(e) => handledistrict(e)}>
                                  <option hidden>জেলা পরিবর্তন করুন</option>
                                  {dristicName?.map((item) => (
                                    <option key={item.id} value={item.id}>
                                      {item.bn_name}
                                    </option>
                                  ))}
                                </select>
                                {!divisionId && (
                                  <p className="text-red-700">প্রথমে বিভাগ বাছাই করুন</p>
                                )}
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                              <div>
                                <label className="text-sm tracking-wide mb-2">
                                  উপজেলা বর্তমান : {profile?.upazilaId?.bn_name}{' '}
                                  <span className="text-red-600">*</span>{' '}
                                </label>
                                <select
                                  name=""
                                  id=""
                                  className="w-full py-2 border rounded-lg focus:outline-none"
                                  onChange={(e) => handleunion(e)}>
                                  <option hidden>উপজেলা পরিবর্তন করুন</option>
                                  {upzillaName?.map((item) => (
                                    <option key={item.id} value={item.id}>
                                      {item.bn_name}
                                    </option>
                                  ))}
                                </select>
                                {!districtId && (
                                  <p className="text-red-700">প্রথমে জেলা বাছাই করুন</p>
                                )}
                              </div>
                              <div>
                                <div>
                                  পৌরসভা বা সিটি কর্পোরেশন করতে চান সিলেক্ট করুন ?{' '}
                                  <input
                                    onClick={() => {
                                      setToggle(!toggle);
                                    }}
                                    type="checkbox"
                                    name="check"
                                  />
                                </div>
                                {toggle ? (
                                  <>
                                    {' '}
                                    <label className="text-sm tracking-wide mb-2">
                                      পৌরসভা / সিটি কর্পোরেশন নাম বাংলায় বর্তমান :{' '}
                                      {profile?.pc ? profile?.pc : 'নেই'}
                                      <span className="text-red-600">*</span>{' '}
                                    </label>
                                    <input
                                      className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                      type="text"
                                      defaultValue={profile?.pc}
                                      placeholder="পৌরসভা / সিটি কর্পোরেশন নাম"
                                      onChange={(e) => setPc(e.target.value)}
                                      required={true}
                                    />
                                  </>
                                ) : (
                                  <>
                                    <label className="text-sm tracking-wide mb-2">
                                      ইউনিয়ন বর্তমান :{' '}
                                      {profile?.unionId?.bn_name
                                        ? profile?.unionId?.bn_name
                                        : 'নেই'}{' '}
                                      <span className="text-red-600">*</span>{' '}
                                    </label>
                                    <select
                                      name=""
                                      id=""
                                      className="w-full py-2 border rounded-lg focus:outline-none"
                                      onChange={handleunionId}>
                                      <option hidden>ইউনিয়ন পরিবর্তন করুন</option>
                                      {unionName?.map((item) => (
                                        <option key={item.id} value={item.id}>
                                          {item.bn_name}
                                        </option>
                                      ))}
                                    </select>
                                    {!upazilaId && (
                                      <p className="text-red-700">প্রথমে উপজেলা বাছাই করুন</p>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      {loading ? (
                        <div className="text-center w-9 mx-auto">
                          <CirclesWithBar width="50px" color="red" outerCircleColor="green" />
                        </div>
                      ) : (
                        <>
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}>
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit">
                            Save Changes
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </section>
    </>
  );
};

export default Profile;
