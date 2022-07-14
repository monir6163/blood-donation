import { useEffect, useState } from 'react';

const useDonated = () => {
  const [user, setUser] = useState([]);
  const [displayUser, setDisplayUser] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  useEffect(() => {
    const url = `https://baroque-fromage-48977.herokuapp.com/user/donated?page=${pageNumber}`;
    fetch(url)
      .then((res) => res.json())
      .then(({ totalPages, allDonated }) => {
        setNumberOfPages(totalPages);
        setUser(allDonated);
        setDisplayUser(allDonated);
      });
  }, [pageNumber]);

  return [user, pageNumber, numberOfPages, setPageNumber, displayUser, setDisplayUser];
};

export default useDonated;
