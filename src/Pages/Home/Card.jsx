import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

const Card = (props) => {
  const {
    name,
    age,
    number,
    bloodGroup,
    imageUrl,
    donar,
    donarTimes,
    divisionId,
    districtId,
    upazilaId,
    unionId
  } = props?.user;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl border-rose-500 border text-center transform duration-500 hover:translate-y-1">
      <div className="text-center p-2">
        <div className="top-2 px-4 animate-bounce z-10 text-xl font-semibold">{bloodGroup}</div>
        <div className="w-28 h-28 rounded-full mx-auto">
          <RenderSmoothImage src={imageUrl} alt={name} />
        </div>
      </div>
      <div className="">
        <div className="font-bold text-xl">
          নাম: <span className="eng">{name}</span>
        </div>
        <div className="grid grid-cols-12 md:gap-4 mt-3 mb-3">
          <div className="col-span-12 lg:col-span-6 flex flex-col text-left mx-auto">
            <div className="font-semibold text-sm">
              নাম্বার: <span className="eng">{number}</span>
            </div>
            <div className="font-semibold text-sm">
              বয়স:{' '}
              <span className="eng">
                {age} <span className="font-normal">বছর</span>{' '}
              </span>
            </div>
            <div className="font-semibold text-sm">
              রক্ত দিবেন:{' '}
              <span className="eng">
                {donar === '1' ? (
                  <span className="font-normal">হ্যাঁ</span>
                ) : (
                  <span className="font-normal">না</span>
                )}
              </span>
            </div>
            <div className="font-semibold text-sm">
              রক্ত দিয়েছেন:{' '}
              <span className="eng">
                {donarTimes}
                {''}
                <span className="font-normal">বার</span>
              </span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col text-left mx-auto">
            <div className="font-semibold text-sm">
              বিভাগ: <span className="eng font-normal">{divisionId?.bn_name}</span>
            </div>
            <div className="font-semibold text-sm">
              জেলা: <span className="eng font-normal">{districtId?.bn_name}</span>
            </div>
            <div className="font-semibold text-sm">
              উপজেলা: <span className="eng font-normal">{upazilaId?.bn_name}</span>
            </div>
            <div className="font-semibold text-sm">
              ইউনিয়ন: <span className="eng font-normal">{unionId?.bn_name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
