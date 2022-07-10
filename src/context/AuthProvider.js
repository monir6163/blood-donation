import { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children, value }) => (
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
);

export default AuthProvider;
