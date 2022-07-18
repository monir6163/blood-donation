import { useEffect, useState } from 'react';

const useAlluser = () => {
  const [user, setUser] = useState([]);
  const [displayUser, setDisplayUser] = useState([]);
  // const [pageNumber, setPageNumber] = useState(0);
  // const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    const url = 'http://localhost:5000/user/all';
    fetch(url)
      .then((res) => res.json())
      .then(({ totalPages, allUsers }) => {
        // setNumberOfPages(totalPages);
        setUser(allUsers);
        setDisplayUser(allUsers);
      });
  }, []);

  return [user, displayUser, setDisplayUser];
};

export default useAlluser;
