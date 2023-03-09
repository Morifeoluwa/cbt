import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (user_id) => {
    localStorage.setItem("user", user_id);
    setIsLoggedIn(true);
    setUser(user_id);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};
