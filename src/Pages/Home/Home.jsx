const Home = () => {
  return (
    <div className="container mx-auto px-4 pt-10">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <select
            name=""
            id=""
            className="w-full py-2 focus:outline-none border border-rose-500 rounded">
            <option value="">রক্তের গ্রুপ অনুসারে খুঁজুন </option>
            <option value="">A+</option>
            <option value="">A-</option>
            <option value="">B+</option>
            <option value="">B-</option>
            <option value="">AB+</option>
            <option value="">AB-</option>
            <option value="">O+</option>
            <option value="">O-</option>
          </select>
        </div>
        <div>
          <select
            name=""
            id=""
            className="w-full py-2 focus:outline-none border border-rose-500 rounded">
            <option value="">ঠিকানা অনুসারে খুঁজুন</option>
            <option value="">A+</option>
            <option value="">A-</option>
            <option value="">B+</option>
            <option value="">B-</option>
            <option value="">AB+</option>
            <option value="">AB-</option>
            <option value="">O+</option>
            <option value="">O-</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
