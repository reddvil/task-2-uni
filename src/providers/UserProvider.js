import { createContext, useContext, useEffect, useState } from 'react';

import API_SERVICE_USER from '../service/userApi';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await API_SERVICE_USER.getUsers({ limit: 7 });
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('error');
  }
  return context;
};

export default UserProvider;
