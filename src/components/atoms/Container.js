import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid white;
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
