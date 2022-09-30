import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);

  const handleLogin = () => {
    return setIsAuth(true);
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
