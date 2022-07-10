import 'render-smooth-image-react/build/style.css';
import useAuth from '../../Hooks/useAuth';

const Requestblood = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="max-w-4xl md:mx-auto mx-2 bg-white shadow-2xl border rounded-lg h-auto py-5 mt-10">
        <div className="grid grid-cols-1 gap-4 items-center">
          <div className="p-3">
            <div className="text-center md:mt-0 lg:mt-0 mt-8">
              <h1 className="font-semibold mb-3">অনুরোধকারীর তথ্য</h1>
            </div>
            <div className="w-full rounded overflow-hidden shadow-2xl">
              <form className="p-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="">
                    <label className="text-sm tracking-wide mb-3">
                      রোগীর নাম <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      defaultValue={user.name}
                    />
                  </div>
                  <div>
                    <label className="text-sm tracking-wide mb-3">
                      নাম্বার <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      defaultValue={user.number}
                    />
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
                    />
                  </div>
                  <div>
                    <label className="text-sm tracking-wide mb-2">
                      ঠিকানা <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="ঠিকানা লিখুন / উপজেলা / ইউনিয়ন"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <div>
                    <label className="text-sm tracking-wide mb-3">
                      রোগের বিবরণ লিখুন <span className="text-red-600">*</span>
                    </label>
                    <textarea className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                  </div>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <div>
                    <label className="text-sm tracking-wide mb-3">
                      আপনি কি রক্তদাতার যাতায়াত খরচ বহন করবেন{' '}
                      <input type="checkbox" name="travel_tk" value="1" />
                    </label>
                  </div>
                </div>
                <br />
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    অনুরোধ করুন
                  </button>
                </div>
                {/* <div className="text-center">
                  {isLoading ? (
                    <div className="text-center w-9 mx-auto">
                      <CirclesWithBar width="50px" color="red" outerCircleColor="green" />
                    </div>
                  ) : (
                    
                  )}
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requestblood;
