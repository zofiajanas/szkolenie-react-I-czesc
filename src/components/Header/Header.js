import * as S from './Header.css';

const Header = ({ logoData }) => {
  return (
    <S.HeaderStyled className='App-header'>
      <S.Image src={logoData} className='App-logo' alt='logo' />
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
      <span className='custom'>custom</span>
      <S.Button>click me</S.Button>
    </S.HeaderStyled>
  );
};

export default Header;
