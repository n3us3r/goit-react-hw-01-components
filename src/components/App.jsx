import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendsList from './FriendsList';
import TransactionHistory from './TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <div
    // style={{
    //   height: '10vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory elements={transactions} />;
    </div>
  );
};

export default App;
