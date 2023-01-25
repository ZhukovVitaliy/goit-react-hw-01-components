import { TaskNumber } from 'components/TaskNumber/TaskNumber';
import { ProfilesBoard } from 'components/ProfilesBoard/ProfilesBoard';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import users from '../../users.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

export const App = () => {
  return (
    <>
      <TaskNumber text="1 - Профиль социальной сети" />
      <ProfilesBoard profiles={users} />

      <TaskNumber text="2- Секция статистики" />
      <Statistics title={`Upload stats`} data={data} />

      <TaskNumber text="3 - Список друзей" />
      <FriendList friends={friends} />

      <TaskNumber text="4 - История транзакций" />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
