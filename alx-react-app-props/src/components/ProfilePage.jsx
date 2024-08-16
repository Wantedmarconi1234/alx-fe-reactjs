import UserContext from '../UserContext';
import { useContext } from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
  
  return <UserInfo userData={userData} />;
}

export default ProfilePage;
