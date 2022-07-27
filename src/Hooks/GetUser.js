import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const GetUser = async () => {
  const [profile, setProfile] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    axios.get(`http://localhost:5000/user/${user?.id}`).then((res) => {
      setProfile(res.data.user);
      console.log(res.data.user);
    });
  }, [user]);
  return [profile];
};

export default GetUser;
