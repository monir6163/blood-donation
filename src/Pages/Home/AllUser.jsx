import axios from 'axios';
import { useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import useAlluser from '../../Hooks/useAlluser';
import Top from '../../Shared/Top';
import Card from './Card';

const AllUser = () => {
  useEffect(() => {
    document.title =
      'রক্ত দাতাদের তালিকা : জীবন আমাদের রক্তে গড়া, রক্তে গড়া প্রাণ। রক্ত দিয়ে বাঁচাবো মোরা শত শত প্রাণ।';
  }, []);
  const data = 8;
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(data);
  const [user, displayuser, setDisplayUser] = useAlluser();
  const handleMoreImage = () => {
    setLoad(true);
    setTimeout(() => {
      setShow(show + data);
      setLoad(false);
    }, 500);
  };
  // const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  // const gotoPrevious = () => {
  //   setPageNumber(Math.max(0, pageNumber - 1));
  // };

  // const gotoNext = () => {
  //   setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  // };

  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios('https://blood-donation-backend-production.up.railway.app/district/all')
      .then((data) => {
        setAddress(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [value, setValue] = useState('');
  const handleSearchField = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setValue(searchValue);
    if (searchValue !== '') {
      const filterUser = user.filter(
        (group) => group.bloodGroup === searchValue || group.districtId.bn_name === searchValue
      );
      setDisplayUser(filterUser);
    } else {
      const filterUser = user.filter(
        (group) =>
          group.bloodGroup.includes(searchValue) || group.districtId.bn_name.includes(searchValue)
      );
      setDisplayUser(filterUser);
    }
  };
  // const handleLoad = () => {
  //   setDisplayUser((prev) => [...prev, displayuser]);
  //   if (displayuser.length > 0) {
  //     setPageNumber(+pageNumber);
  //     setHasMore(false);
  //   }
  // };

  return (
    <>
      <Top />
      <section className="container mx-auto px-4 pt-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <select
              name=""
              id=""
              onChange={handleSearchField}
              className="w-full py-2 focus:outline-none border border-rose-500 rounded">
              <option value="">রক্তের গ্রুপ অনুসারে খুঁজুন </option>
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
            <select
              onChange={handleSearchField}
              name=""
              id=""
              className="w-full py-2 focus:outline-none border border-rose-500 rounded">
              <option value="">জেলা অনুসারে খুঁজুন</option>
              {address?.map((districts) => {
                return (
                  <option key={districts._id} value={districts?.bn_name}>
                    {districts?.bn_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-4 px-4 md:py-4 -z-50">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
          {displayuser?.length === 0 ? (
            <div className="flex justify-center items-center">
              {value === '' ? (
                <div className="text-center w-9 mx-auto">
                  <CirclesWithBar width="50px" color="red" outerCircleColor="green" />
                </div>
              ) : (
                <div className="text-center font-semibold text-red-700">
                  <h1 className="text-center py-20">( {value} ) রক্ত পাওয়া যায়নি....</h1>
                </div>
              )}
            </div>
          ) : (
            displayuser?.slice(0, show)?.map((all) => <Card key={all._id} user={all}></Card>)
          )}
        </section>

        {load ? (
          <div className=" flex justify-center mt-5 animate-spin-slow">
            {/* <IconCircleDotted /> */}
            <CirclesWithBar width="50px" color="red" outerCircleColor="green" />
          </div>
        ) : (
          <>
            {show < displayuser?.length && (
              <div className="flex justify-center">
                <button
                  onClick={handleMoreImage}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-normal py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5">
                  আরো দেখুন
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default AllUser;
