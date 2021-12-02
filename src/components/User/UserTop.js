import { useContext } from 'react';
import { UserContext } from './UserContext';

const UserTop = () => {
  const { name } = useContext(UserContext);
  return (
    <div>
      <p>Hi {name}</p>
    </div>
  );
};

export default UserTop;
