import { useContext } from 'react';
import { UserContext } from './UserContext';

const UserMenu = () => {
  const { name } = useContext(UserContext);

  return (
    <div>
      <p>Hi {name}</p>
    </div>
  );
};

export default UserMenu;
