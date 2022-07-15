import axios from 'axios';
import { useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../Hooks/useAuth';
import Top from '../../Shared/Top';

const Requestblood = () => {
  useEffect(() => {
    document.title =
      'রক্তের জন্য অনুরোধ পাঠান : জীবন আমাদের রক্তে গড়া, রক্তে গড়া প্রাণ। রক্ত দিয়ে বাঁচাবো মোরা শত শত প্রাণ।';
  }, []);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const regex = /^(?:(?:\+|00)88|01)?\d{11}\r?$/;
  const bnRegx = /(\+৮৮|৮৮|০১)?[০-৯]{11}/g;
  const location = useNavigate();
  const RequestbloodForm = async (e) => {
    e.preventDefault();
    setError({});
    if (
      !data.name &&
      !data.number &&
      !data.hospitalName &&
      !data.address &&
      !data.bloodGroup &&
      !data.bloodDate &&
      !data.details &&
      !data.donarCost
    ) {
      return setError({
        name: 'Name is required',
        number: 'Number is required',
        hospitalName: 'Hospital name is required',
        address: 'Address is required',
        bloodGroup: 'Blood group is required',
        bloodDate: 'Date is required',
        details: 'Details is required',
        donarCost: 'Donar cost is required'
      });
    }
    if (
      data.name &&
      data.number &&
      data.hospitalName &&
      data.address &&
      data.bloodGroup &&
      data.bloodDate &&
      data.details &&
      data.donarCost
    ) {
      if (!regex.test(data.number) && !bnRegx.test(data.number)) {
        return setError({
          number: 'Only Valid Number Allow'
        });
      }
    }
    if (
      data.name &&
      !data.number &&
      !data.hospitalName &&
      !data.address &&
      !data.bloodGroup &&
      !data.bloodDate &&
      !data.details &&
      !data.donarCost
    ) {
      return setError({
        number: 'Number is required',
        hospitalName: 'Hospital name is required',
        address: 'Address is required',
        bloodGroup: 'Blood group is required',
        bloodDate: 'Date is required',
        details: 'Details is required',
        donarCost: 'Donar cost is required'
      });
    }
    if (
      data.name &&
      data.number &&
      !data.hospitalName &&
      !data.address &&
      !data.bloodGroup &&
      !data.bloodDate &&
      !data.details &&
      !data.donarCost
    ) {
      return setError({
        hospitalName: 'Hospital name is required',
        address: 'Address is required',
        bloodGroup: 'Blood group is required',
        bloodDate: 'Date is required',
        details: 'Details is required',
        donarCost: 'Donar cost is required'
      });
    }
    if (
      data.name &&
      data.number &&
      data.hospitalName &&
      !data.address &&
      !data.bloodGroup &&
      !data.bloodDate &&
      !data.details &&
      !data.donarCost
    ) {
      return setError({
        address: 'Address is required',
        bloodGroup: 'Blood group is required',
        bloodDate: 'Date is required',
        details: 'Details is required',
        donarCost: 'Donar cost is required'
      });
    }
    if (
      data.name &&
      data.number &&
      data.hospitalName &&
      data.address &&
      !data.bloodGroup &&
      !data.bloodDate &&
      !data.details &&
      !data.donarCost
    ) {
      return setError({
        bloodGroup: 'Blood group is required',
        bloodDate: 'Date is required',
        details: 'Details is required',
        donarCost: 'Donar cost is required'
      });
    }
    if (
      data.name &&
      data.number &&
      data.hospitalName &&
      data.address &&
      data.bloodGroup &&
      !data.bloodDate &&
      !data.details &&
      !data.donarCost
    ) {
      return setError({
        bloodDate: 'Date is required',
        details: 'Details is required',
        donarCost: 'Donar cost is required'
      });
    }
    if (
      data.name &&
      data.number &&
      data.hospitalName &&
      data.address &&
      data.bloodGroup &&
      data.bloodDate &&
      !data.details &&
      !data.donarCost
    ) {
      return setError({
        details: 'Details is required',
        donarCost: 'Donar cost is required'
      });
    }
    if (
      data.name &&
      data.number &&
      data.hospitalName &&
      data.address &&
      data.bloodGroup &&
      data.bloodDate &&
      data.details &&
      !data.donarCost
    ) {
      return setError({
        donarCost: 'Donar cost is required'
      });
    }
    if (
      data.name &&
      data.number &&
      data.hospitalName &&
      data.address &&
      data.bloodGroup &&
      data.bloodDate &&
      data.details &&
      !data.donarCost
    ) {
      return setError({
        donarCost: 'Donar cost is required'
      });
    }

    const finalData = {};
    if (data.name) finalData.name = data.name;
    if (data.number) finalData.number = data.number;
    if (data.hospitalName) finalData.hospitalName = data.hospitalName;
    if (data.address) finalData.address = data.address;
    if (data.bloodGroup) finalData.bloodGroup = data.bloodGroup;
    if (data.bloodDate) finalData.bloodDate = data.bloodDate;
    if (data.details) finalData.details = data.details;
    if (data.donarCost) finalData.donarCost = data.donarCost;
    finalData.userId = user.id;
    try {
      setLoading(true);
      e.target.reset();
      const url = 'https://baroque-fromage-48977.herokuapp.com/blood/api/bloodRequests';
      await axios.post(url, { ...finalData }).then((res) => {
        if (res) {
          e.target.reset();
          toast.success('Blood Request SuccessFull !');
          setLoading(false);
          location('/requestbloodlist');
        } else {
          toast.error('Something Went Wrong. Please Try Again !');
          setLoading(false);
        }
      });
    } catch (e) {
      if (e) {
        toast.error('Something Went Wrong. Please Try Again !');
        setLoading(false);
      }
    }
  };
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  };
  return (
    <>
      <Top />
      <div className="max-w-4xl md:mx-auto mx-2 bg-white shadow-2xl border rounded-lg h-auto mt-8 mb-8">
        <div className="grid grid-cols-1 gap-4 items-center">
          <div className="p-3">
            <div className="text-center md:mt-0 lg:mt-0 mt-8">
              <h1 className="font-semibold mb-3">রক্তের জন্য অনুরোধকারীর তথ্য</h1>
            </div>
            <div className="w-full rounded overflow-hidden ">
              <form className="p-3" onSubmit={RequestbloodForm}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="">
                    <label className="text-sm tracking-wide mb-3">
                      রোগীর / অনুরোধকারীর নাম <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="রোগীর / অনুরোধকারীর নাম"
                      id="name"
                      onChange={(e) => {
                        setError((prevState) => ({ ...prevState, name: '' }));
                        setData((prevState) => ({ ...prevState, name: e.target.value }));
                      }}
                    />
                    <p className="text-sm text-red-700">{error.name}</p>
                  </div>
                  <div>
                    <label className="text-sm tracking-wide mb-3">
                      নাম্বার <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="নাম্বার"
                      id="number"
                      onChange={(e) => {
                        setError((prevState) => ({ ...prevState, number: '' }));
                        setData((prevState) => ({ ...prevState, number: e.target.value }));
                      }}
                    />
                    <p className="text-sm text-red-700">{error.number}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-sm tracking-wide mb-3">
                      হাসপাতাল নাম <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="হাসপাতাল নাম"
                      id="hospitalName"
                      onChange={(e) => {
                        setError((prevState) => ({ ...prevState, hospitalName: '' }));
                        setData((prevState) => ({ ...prevState, hospitalName: e.target.value }));
                      }}
                    />
                    <p className="text-sm text-red-700">{error.hospitalName}</p>
                  </div>
                  <div>
                    <label className="text-sm tracking-wide mb-2">
                      ঠিকানা <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="ঠিকানা লিখুন / উপজেলা / ইউনিয়ন"
                      id="address"
                      onChange={(e) => {
                        setError((prevState) => ({ ...prevState, address: '' }));
                        setData((prevState) => ({ ...prevState, address: e.target.value }));
                      }}
                    />
                    <p className="text-sm text-red-700">{error.address}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-sm tracking-wide mb-6">
                      রক্তের গ্রুপ সিলেক্ট করুন <span className="text-red-600">*</span>
                    </label>
                    <select
                      name=""
                      id="bloodGroup"
                      onChange={(e) => {
                        setError((prevState) => ({ ...prevState, bloodGroup: '' }));
                        setData((prevState) => ({ ...prevState, bloodGroup: e.target.value }));
                      }}
                      className="w-full py-2 border rounded-lg focus:outline-none">
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
                    <p className="text-sm text-red-700">{error.bloodGroup}</p>
                  </div>
                  <div>
                    <label className="text-sm tracking-wide mb-2">
                      রক্ত নেওয়ার তারিখ <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="date"
                      placeholder="দিন-মাস-বছর"
                      id="bloodDate"
                      min={disablePastDate()}
                      onChange={(e) => {
                        setError((prevState) => ({ ...prevState, bloodDate: '' }));
                        setData((prevState) => ({ ...prevState, bloodDate: e.target.value }));
                      }}
                    />
                    <p className="text-sm text-red-700">{error.bloodDate}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-sm tracking-wide mb-3">
                      রোগের বিবরণ লিখুন <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="details"
                      onChange={(e) => {
                        setError((prevState) => ({ ...prevState, details: '' }));
                        setData((prevState) => ({ ...prevState, details: e.target.value }));
                      }}
                      className="appearance-none border rounded-lg w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    <p className="text-sm text-red-700">{error.details}</p>
                  </div>
                  <div>
                    <label className="text-sm tracking-wide mb-6">
                      আপনি কি রক্তদাতার যাতায়াত খরচ বহন করবেন{' '}
                      <span className="text-red-600">*</span>
                    </label>
                    <select
                      name=""
                      id="donarCost"
                      onChange={(e) => {
                        setError((prevState) => ({ ...prevState, donarCost: '' }));
                        setData((prevState) => ({ ...prevState, donarCost: e.target.value }));
                      }}
                      className="w-full py-2 border rounded-lg focus:outline-none">
                      <option value="">সিলেক্ট করুন</option>
                      <option value="yes">হ্যাঁ</option>
                      <option value="no">না</option>
                    </select>
                    <p className="text-sm text-red-700">{error.donarCost}</p>
                  </div>
                </div>

                <div className="text-center">
                  {loading ? (
                    <div className="text-center w-9 mx-auto">
                      <CirclesWithBar width="50px" color="red" outerCircleColor="green" />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      অনুরোধ করুন
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requestblood;
