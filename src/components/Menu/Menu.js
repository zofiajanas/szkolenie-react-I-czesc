import styled from 'styled-components';
import UserMenu from '../User/UserMenu';

const MenuList = styled.ul`
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
  const renderMenu = menuItems.map(item => <MenuItem column={column}>{item.name}</MenuItem>);

  return (
    <nav>
      <UserMenu />
      <MenuList column={column}>{renderMenu}</MenuList>
    </nav>
  );
};

export default Menu;
