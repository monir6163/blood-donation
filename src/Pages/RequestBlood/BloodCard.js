import React from 'react';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';
const BloodCard = (props) => {
  const {
    name,
    number,
    hospitalName,
    address,
    bloodGroup,
    bloodDate,
    details,
    donarCost,
    userId,
    requestDate
  } = props.request;
  const date = new Date(bloodDate);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const finalDate = date.toLocaleDateString('en-us', options);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl border-rose-500 border text-center transform duration-500 hover:translate-y-1 ">
      <div className="text-center p-2">
        <div className="top-2 px-4 animate-bounce text-red-600 z-10 text-xl font-semibold">
          {bloodGroup}
        </div>
        <div className="w-28 h-28 rounded-full mx-auto">
          <RenderSmoothImage src={userId?.imageUrl} alt={name} />
        </div>
      </div>
      <div className="p-2">
        <div className="font-bold text-xl">
          নাম : <span className="eng">{name}</span>
        </div>
        <div className="font-semibold text-sm">
          হাসপাতাল নাম : <span className="eng">{hospitalName}</span>
        </div>
        <div className="font-semibold text-sm">
          নাম্বার : <span className="eng">{number}</span>
        </div>
        <div className="font-semibold text-sm">ঠিকানা : {address}</div>
        <div className="font-semibold text-sm">রক্ত দেয়ার তারিখ : {finalDate}</div>
        <div className="font-semibold text-sm">রোগের বিবরণ : {details}</div>
        {donarCost === 'yes' ? (
          <div className="font-semibold text-sm">খরচ : যাতায়াত খরচ বহন করবে </div>
        ) : donarCost === 'no' ? (
          <div className="font-semibold text-sm">খরচ : যাতায়াত খরচ বহন করবে না</div>
        ) : (
          ''
        )}
        <div className="font-semibold text-sm">
          অনুরোধের তারিখ : {new Date(requestDate).toDateString()}
        </div>
        <a href={`tel:${number}`}>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-normal py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            কল করুন
          </button>
        </a>
      </div>
    </div>
  );
};

export default BloodCard;
