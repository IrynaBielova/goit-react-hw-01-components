import { Profile } from 'components/Profile/Profile'
import user from 'components/Data/user.json'

export const App = () => {
    return (
<Profile user={user}/>
    );
  };