import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { themeDark, themeLight } from './styles/theme';

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
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    console.log('click');
    setIsDarkTheme(prev => !prev);
  };

  // component did mount
  // component did update
  // component did unmount

  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('clear');
    };
  }, []);

  useEffect(() => {
    console.log('change');
    return () => {
      // cleanup
    };
  }, [isDarkTheme]);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <div className='App'>
        <button onClick={changeTheme}>change theme</button>
        <Header logoData={logo} />
        <Menu menuItems={menuItems} />
        <Menu menuItems={menuItemsBottom} column />
      </div>
    </ThemeProvider>
  );
}

export default App;
