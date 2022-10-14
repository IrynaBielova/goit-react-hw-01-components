/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
// import { GlobalStyle } from './GlobalStyle';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { Box } from 'components/Box';

import user from 'components/Data/user.json';
import data from 'components/Data/data.json';
import friends from 'components/Data/friends.json';
import transactions from './Data/transactions.json';

export const App = () => {
    return (
    <Box as="main">    
        <Profile user={user}/>
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />;
        <TransactionHistory items={transactions} />;
    </Box>
    );
  };