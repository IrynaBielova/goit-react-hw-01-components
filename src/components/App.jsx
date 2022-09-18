/* eslint-disable no-unused-vars */
import { GlobalStyle } from 'components/GlobalStyle';
import { Profile } from 'components/Profile/Profile'
import { Box } from 'components/Box';
import user from 'components/Data/user.json'

export const App = () => {
    return (
        <><Box as="main">
            <Profile user={user} />
        </Box><GlobalStyle /></>
    );
  };