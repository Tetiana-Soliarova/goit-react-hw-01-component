import React from 'react';
//import PropTypes from 'prop-types';

import Profile from './components/Social-profile';
import user from './database/user.json';

import Statistics from './components/Statistics/index';
import statisticalData from './database/statistical-data.json';

import FriendList from './components/Friend/FriendList';
import friends from './database/friends.json';

import TransactionHistory from './components/TransactionHistory';
import transactions from './database/transactions.json';



export default App;
function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


