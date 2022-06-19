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
            name=""
            id=""
            className="w-full py-2 focus:outline-none border border-rose-500 rounded">
            <option value="">ঠিকানা অনুসারে খুঁজুন</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
