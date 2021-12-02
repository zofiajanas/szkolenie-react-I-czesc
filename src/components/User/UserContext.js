import { createContext, useState } from 'react';

export const UserContext = createContext({
  name: '',
});

const UserProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const name = 'Aga';

  const changeTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <UserContext.Provider
      value={{
        name,
        isDarkTheme,
        changeTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
