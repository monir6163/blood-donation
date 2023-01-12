import { useEffect, useState } from 'react';

const useDonated = () => {
  const [user, setUser] = useState([]);
  const [displayUser, setDisplayUser] = useState([]);
  // const [pageNumber, setPageNumber] = useState(0);
  // const [numberOfPages, setNumberOfPages] = useState(0);
  useEffect(() => {
    const url = `https://blood-donation-backend-production.up.railway.app/user/donated`;
    fetch(url)
      .then((res) => res.json())
      .then(({ totalPages, allDonated }) => {
        // setNumberOfPages(totalPages);
        setUser(allDonated);
        setDisplayUser(allDonated);
      });
  }, []);

  return [user, displayUser, setDisplayUser];
};

export default useDonated;
