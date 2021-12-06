import styled from 'styled-components';

const MenuStyled = styled.ul`
  display: flex;
  list-style: none;

  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

const MenuItem = styled.li`
  margin: ${({ column }) => (column ? '20px 10px' : '0 10px')};

  text-decoration: none;
  padding: 10px 20px;
  color: black;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: #ccc;
  }
`;

const Menu = ({ menuItems, column }) => {
  const menuItemsRender = menuItems.map(item => (
    <MenuItem column={column} key={item.id}>
      <a href='item.url'> {item.name}</a>
    </MenuItem>
  ));

  return (
    <nav>
      <MenuStyled column={column}>{menuItemsRender}</MenuStyled>
    </nav>
  );
};

export default Menu;
