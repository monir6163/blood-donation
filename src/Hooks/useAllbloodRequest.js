import { useEffect, useState } from 'react';

const useAllbloodRequest = () => {
  const [bloodRequest, setBloodRequest] = useState([]);
  const [displayUser, setDisplayUser] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  useEffect(() => {
    const url = `https://baroque-fromage-48977.herokuapp.com/blood/api/bloodRequests/?page=${pageNumber}`;
    fetch(url)
      .then((res) => res.json())
      .then(({ totalPages, bloodData }) => {
        setBloodRequest(bloodData);
        setDisplayUser(bloodData);
        setNumberOfPages(totalPages);
      });
  }, [pageNumber]);
  return [bloodRequest, pageNumber, numberOfPages, setPageNumber, displayUser, setDisplayUser];
};

export default useAllbloodRequest;
