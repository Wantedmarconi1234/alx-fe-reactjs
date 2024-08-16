import UserContext from './UserContext';
import { useContext } from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  const userData = useContext(UserContext)

  return <UserDetails userData={userData} />;
}

export default UserInfo;