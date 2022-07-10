import { useEffect, useState } from 'react';

const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const url = 'http://localhost:5000/user/me';

  const token = localStorage.getItem('token');
  const logout = () => {
    localStorage.removeItem('token');
  };
  useEffect(() => {
    const auth = async () => {
      if (token) {
        setIsLoading(true);
        fetch(url, {
          headers: {
            authorization: 'Bearer ' + token
          }
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.user) {
              setUser(data.user);
              setIsLoading(false);
            } else {
              setUser(null);
              setIsLoading(false);
              localStorage.removeItem('token');
            }
          })
          .catch(() => {
            setUser(null);
            setIsLoading(false);
            localStorage.removeItem('token');
          });
      } else {
        setUser(null);
        setIsLoading(false);
      }
    };
    auth();
  }, [shouldUpdate, token]);
  return {
    user,
    setUser,
    setIsLoading,
    isLoading,
    setShouldUpdate,
    logout
  };
};

export default useAuthentication;
