import { useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

import { themeLight, themeDark } from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import UserTop from './components/User/UserTop';
import { UserContext } from './components/User/UserContext';
import CharactersList from './components/CharacterList/CharactersList';

const menuItems = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'Products', url: '/produts' },
  { id: 3, name: 'Contact', url: '/contact' },
];

const menuItemsBottom = [
  { id: 1, name: 'Strona główna', url: '/' },
  { id: 2, name: 'Zabawki', url: '/toys' },
  { id: 3, name: 'Lokalizacja', url: '/location' },
];

function App() {
  const { isDarkTheme } = useContext(UserContext);

  useEffect(() => {
    console.log('did mount');
    return () => {
      // console.log('did unmount');
    };
  }, [isDarkTheme]);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <div className='App'>
        <UserTop />
        <Header logo={logo} />
        <Menu menuItems={menuItems} />
        <Menu menuItems={menuItemsBottom} column />

        <CharactersList />
        {/* <main/>
      <footer/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
