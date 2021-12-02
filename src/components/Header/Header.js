import { useContext } from 'react';
import Container from '../atoms/Container';
import { UserContext } from '../User/UserContext';
import UserHeader from '../User/UserHeader';
import * as S from './Header.css';

const Header = ({ logo }) => {
  const { changeTheme } = useContext(UserContext);

  return (
    <S.HeaderStyled className='App-header'>
      <button onClick={changeTheme}>Change theme</button>
      <S.Image src={logo} className='App-logo' alt='logo' />
      <S.Paragraph>
        Edit <code>src/App.js</code> and save to reload.
      </S.Paragraph>
      <S.Link
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </S.Link>
      <S.Button>Click me</S.Button>
      <Container>
        <p className='custom'>custom text</p>
      </Container>
      <UserHeader />
    </S.HeaderStyled>
  );
};

export default Header;
