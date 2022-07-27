import React, { useState } from 'react';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {
  const { profile } = useAuth();

  const [showModal, setShowModal] = useState('');
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
                          <span className="font-normal">বার</span>
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
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main thing people are
                      controlled by! Thoughts- their perception of themselves! They're slowed down
                      by their perception of themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}>
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </section>
    </>
  );
};

export default Profile;
