import userData from 'data/user.json';
import statsData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionData from 'data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// const { username, tag, location, avatar, stats } = user;

export const App = () => {
    return (
        <div
            style={{
                height: 'auto',
                display: 'flex',
                paddingTop: 60,
                paddingBottom: 60,
                gap: 30,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#010101',
            }}
        >
            <Profile
                username={userData.username}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats}
            />
            <Statistics title={'Upload stats'} data={statsData} />
            <FriendList data={friendsData} />
            <TransactionHistory data={transactionData} />
        </div>
    );
};
