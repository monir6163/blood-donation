import { useEffect } from 'react';
import NewsScroll from '../../Shared/NewsScroll/NewsScroll';
import AllUser from './AllUser';

const Home = () => {
  useEffect(() => {
    document.title =
      'হোম : জীবন আমাদের রক্তে গড়া, রক্তে গড়া প্রাণ। রক্ত দিয়ে বাঁচাবো মোরা শত শত প্রাণ।';
  }, []);
  return (
    <>
      <NewsScroll />
      <AllUser />
    </>
  );
};

export default Home;
