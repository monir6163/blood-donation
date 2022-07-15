import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { CirclesWithBar } from 'react-loader-spinner';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 } from 'uuid';
import useAuth from '../../Hooks/useAuth';
import Top from '../Top';
import { storage } from './firebase';
const Register = () => {
  useEffect(() => {
    document.title =
      'রক্ত দিতে / রক্ত নিতে ইচ্ছুক : জীবন আমাদের রক্তে গড়া, রক্তে গড়া প্রাণ। রক্ত দিয়ে বাঁচাবো মোরা শত শত প্রাণ।';
  }, []);
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
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [image, setImage] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [donar, setDonar] = useState();
  const [donarTimes, setDonarTimes] = useState('০');
  const { user } = useAuth();
  const location = useLocation();
  const history = useNavigate();
  const regex = /^(?:(?:\+|00)88|01)?\d{11}\r?$/;
  const bnRegx = /(\+৮৮|৮৮|০১)?[০-৯]{11}/g;
  const ageregexeng = /^[0-9]*$/;
  const ageregexbn = /^[০-৯]*$/;
  const handleimage = (e) => {
    const img = e.target.files[0];
    setImage(img);
  };
  const intialValues = {
    name,
    age,
    bloodGroup,
    image,
    donar,
    donarTimes,
    number,
    divisionId,
    districtId,
    upazilaId,
    unionId,
    password
  };
  const [Nameerror, setNameerror] = useState('');
  const [Ageerror, setAgeerror] = useState('');
  const [blood, setBlood] = useState('');
  const [img, setImg] = useState('');
  const [divId, setDivId] = useState('');
  const [disId, setDisId] = useState('');
  const [upoId, setUpoId] = useState('');
  const [uniId, setUniId] = useState('');
  const [numberError, setNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handlesubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    //validation code
    setNameerror('');
    setAgeerror('');
    setNumberError('');
    setPasswordError('');
    setBlood('');
    setImg('');
    setDivId('');
    setDisId('');
    setUpoId('');
    setUniId('');
    if (!name) {
      setIsLoading(false);
      return setNameerror('Name is Required');
    } else if (name.length > 20) {
      setNameerror('Name Must be 20 characters');
      setIsLoading(false);
      return;
    }
    if (!age) {
      setAgeerror('Age is Required');
      setIsLoading(false);
      return;
    } else if (!ageregexeng.test(age) && !ageregexbn.test(age)) {
      setAgeerror('Only Eng or Bn Number Allow');
      setIsLoading(false);
      return;
    } else if (age.length > 2) {
      setAgeerror('Age Must be 2 characters');
      setIsLoading(false);
      return;
    }
    if (!bloodGroup) {
      setBlood('BloodGroup is Required');
      setIsLoading(false);
      return;
    }
    if (!image) {
      setImg('Image is Required');
      setIsLoading(false);
      return;
    }
    if (!divisionId) {
      setDivId('Division is Required');
      setIsLoading(false);
      return;
    }
    if (!districtId) {
      setDisId('District is Required');
      setIsLoading(false);
      return;
    }
    if (!upazilaId) {
      setUpoId('Upazila is Required');
      setIsLoading(false);
      return;
    }
    if (!unionId) {
      setUniId('Union is Required');
      setIsLoading(false);
      return;
    }
    if (!number) {
      setNumberError('Number is Required');
      setIsLoading(false);
      return;
    } else if (!regex.test(number) && !bnRegx.test(number)) {
      setNumberError('Only Valid Number Allow & 11 Digits');
      setIsLoading(false);
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      setIsLoading(false);
      return;
    } else if (password.length < 4) {
      setPasswordError('Password must be more than 4 characters');
      setIsLoading(false);
      return;
    } else if (password.length > 10) {
      setPasswordError('Password Must be 10 characters');
      setIsLoading(false);
      return;
    }
    //end validation code
    if (image) {
      if (
        image?.name.split('.').pop() !== 'jpg' &&
        image?.name.split('.').pop() !== 'png' &&
        image?.name.split('.').pop() !== 'jpeg'
      ) {
        toast.error('Image Must Be Jpg,Png, Jpeg');
        setIsLoading(false);
        return;
      }
    }
    if (image?.size >= 3000000) {
      toast.error('Image Must Be 3Mb');
      setIsLoading(false);
      return;
    }
    if (image === undefined || name === undefined) {
      setIsLoading(false);
      return;
    }
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        if (url) {
          axios
            .post(
              'https://baroque-fromage-48977.herokuapp.com/user/register',
              { ...intialValues, imageUrl: url },
              {
                headers: {
                  'content-type': 'multipart/form-data'
                }
              }
            )
            .then((res) => {
              if (res) {
                e.target.reset();
                toast.success('User Register SuccessFull !');
                setIsLoading(false);
                history('/login');
              }
            })
            .catch((err) => {
              if (err) {
                toast.error('Something Went Wrong. Please Try Again !');
                setIsLoading(false);
              }
            });
        }
      });
    });
  };
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
  if (user) {
    const redirect = location.state || '/';
    return <Navigate to={redirect} />;
  }

  return (
    <>
      <Top />
      <div className="max-w-4xl md:mx-auto mx-2 bg-white shadow-2xl border rounded-lg h-auto py-5 mt-8 mb-8">
        <div className="text-center">
          <div
            onClick={() => history('/')}
            className="top-2 left-0 btn px-4 animate-bounce z-10 cursor-pointer">
            <GrClose size="1.5em" />
          </div>
          <h1 className="text-lg font-semibold tracking-wide mb-2 text-red-500">নিবন্ধন করুন</h1>
          <h6 className="text-xs font-light">রক্তদানে স্বাগতম।</h6>
        </div>
        <div className="mx-2 pt-5 md:mx-2">
          <form className="w-full p-6 mx-auto" onSubmit={handlesubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-sm tracking-wide mb-3">
                  নাম <span className="text-red-600">*</span>
                </label>
                <input
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="নাম"
                />
                <p className="text-red-600">{Nameerror}</p>
              </div>
              <div>
                <label className="text-sm tracking-wide mb-2">
                  বয়স <span className="text-red-600">*</span>
                </label>
                <input
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="বয়স"
                />
                <p className="text-red-600">{Ageerror}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 md:pt-4">
              <div>
                <label className="text-sm tracking-wide mb-6">
                  রক্তের গ্রুপ <span className="text-red-600">*</span>
                </label>
                <select
                  name=""
                  id=""
                  className="w-full py-2 border rounded-lg focus:outline-none"
                  onChange={(e) => setBloodGroup(e.target.value)}>
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
                <p className="text-red-600">{blood}</p>
              </div>
              <div>
                <label className="text-sm tracking-wide mb-2">
                  ছবি আপলোড করুন <span className="text-red-600">*</span>{' '}
                  <small>সর্বোচ্চ ৩ এমবি হতে হবে </small>
                </label>
                <input
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="file"
                  onChange={handleimage}
                  title="ছবি আপলোড করুন"
                />

                <p className="text-red-600">{img}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 md:pt-4">
              <div>
                <label className="text-sm tracking-wide mb-6">
                  আগে রক্ত কতবার দিয়েছেন <span className="text-red-600">*</span>
                </label>
                <select
                  name=""
                  id=""
                  className="w-full py-2 border rounded-lg focus:outline-none"
                  onChange={(e) => setDonarTimes(e.target.value)}>
                  <option value="০">০(বার)</option>
                  <option value="১">১(বার)</option>
                  <option value="২">২(বার)</option>
                  <option value="৩">৩(বার)</option>
                  <option value="৪">৪(বার)</option>
                  <option value="৫">৫(বার)</option>
                  <option value="৬">৬(বার)</option>
                  <option value="৭">৭(বার)</option>
                  <option value="৮">৮(বার)</option>
                  <option value="৯">৯(বার)</option>
                  <option value="১০">১০(বার)</option>
                </select>
                <p className="text-red-600">{blood}</p>
              </div>
              <div className="pt-3">
                <label htmlFor="yes" className="text-sm tracking-wide mb-2">
                  আপনি রক্ত নিবেন ? <span className="text-red-600">*</span>{' '}
                  <input
                    onChange={(e) => setDonar(e.target.value)}
                    type="radio"
                    id="yes"
                    name="donar"
                    value="2"
                  />{' '}
                  হ্যাঁ
                </label>
                <div>
                  <label htmlFor="no" className="text-sm tracking-wide mb-2">
                    আপনি রক্ত দিবেন ? <span className="text-red-600">*</span>{' '}
                    <input
                      onChange={(e) => setDonar(e.target.value)}
                      type="radio"
                      id="no"
                      name="donar"
                      value="1"
                    />{' '}
                    হ্যাঁ
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 md:pt-4">
              <div>
                <label className="text-sm tracking-wide mb-6">
                  নাম্বার <span className="text-red-600">*</span>
                </label>
                <input
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="নাম্বার"
                />
                <p className="text-red-600">{numberError}</p>
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
                  <option hidden>বিভাগ বাছাই করুন</option>
                  {division?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.bn_name}
                    </option>
                  ))}
                </select>
                <p className="text-red-600">{divId}</p>
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
                  <option hidden>জেলা বাছাই করুন</option>
                  {dristicName?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.bn_name}
                    </option>
                  ))}
                </select>
                <p className="text-red-600">{disId}</p>
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
                  <option hidden>উপজেলা বাছাই করুন</option>
                  {upzillaName?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.bn_name}
                    </option>
                  ))}
                </select>
                <p className="text-red-600">{upoId}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 md:pt-4">
              <div>
                <label className="text-sm tracking-wide mb-2">
                  ইউনিয়ন <span className="text-red-600">*</span>{' '}
                </label>
                <select
                  name=""
                  id=""
                  className="w-full py-2 border rounded-lg focus:outline-none"
                  onChange={handleunionId}>
                  <option hidden>ইউনিয়ন বাছাই করুন</option>
                  {unionName?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.bn_name}
                    </option>
                  ))}
                </select>
                <p className="text-red-600">{uniId}</p>
              </div>
              <div>
                <label className="text-sm tracking-wide mb-2">
                  পাসওয়ার্ড <span className="text-red-600">*</span>{' '}
                </label>
                <input
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="পাসওয়ার্ড"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-red-600">{passwordError}</p>
              </div>
            </div>
            <br />
            <div className="text-center">
              {isLoading ? (
                <div className="text-center w-9 mx-auto">
                  <CirclesWithBar width="50px" color="red" outerCircleColor="green" />
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  নিবন্ধন করুন
                </button>
              )}
            </div>
          </form>

          <br />
          <h1 className="text-center">
            আপনার একটি একাউন্ট আছে{' '}
            <NavLink to="/login" className="text-sm font-medium text-indigo-600">
              লগইন করুন
            </NavLink>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Register;
