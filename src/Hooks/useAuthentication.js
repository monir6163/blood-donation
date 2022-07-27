import axios from 'axios';
import { useEffect, useState } from 'react';

const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [profile, setProfile] = useState({});
  const url = 'https://baroque-fromage-48977.herokuapp.com/user/me';
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
  useEffect(() => {
    axios.get(`https://baroque-fromage-48977.herokuapp.com/user/${user?.id}`).then((res) => {
      if (res.data.user) {
        setProfile(res.data.user);
      }
    });
  }, [user?.id]);
  return {
    user,
    setUser,
    setIsLoading,
    isLoading,
    setShouldUpdate,
    logout,
    profile
  };
};

export default useAuthentication;
