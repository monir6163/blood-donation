import axios from 'axios';
import { useEffect, useState } from 'react';
import useAlluser from '../../Hooks/useAlluser';
import Card from './Card';

const AllUser = () => {
  const [user, pageNumber, numberOfPages, setPageNumber, displayuser, setDisplayUser] =
    useAlluser();

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };
  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios('http://localhost:5000/district/all')
      .then((data) => {
        setAddress(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSearchField = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
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

  return (
    <>
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
              <option value="">ঠিকানা অনুসারে খুঁজুন</option>
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

      <section className="container mx-auto py-4 px-4 md:py-4">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
          {displayuser?.length === 0 ? (
            <div className="flex justify-center items-center">
              <div className="text-center font-semibold text-red-700">
                <h1>Blood Not Found Here....</h1>
              </div>
            </div>
          ) : (
            displayuser?.map((all) => <Card key={all._id} user={all}></Card>)
          )}
        </section>

        {displayuser?.length === 0 ? (
          ''
        ) : (
          <div className="bg-white px-4 py-3 flex items-center text-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="text-center">
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination">
                  <button
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={gotoPrevious}>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {pages.map((pageIndex) => (
                    <button
                      className={`z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer selected:bg-slate-200 ${
                        pageIndex === pageNumber ? 'bg-slate-900 text-slate-50' : ''
                      }`}
                      key={pageIndex}
                      onClick={() => setPageNumber(pageIndex)}>
                      {pageIndex + 1}
                    </button>
                  ))}
                  <button
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={gotoNext}>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AllUser;
