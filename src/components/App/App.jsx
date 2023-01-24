import { TaskNumber } from 'components/TaskNumber/TaskNumber';
import { Profile } from 'components/Profile/Profile';
// import user from '../../user.json';

export const App = () => {
  return (
    <>
      <TaskNumber text="Task number 01" />
      <Profile />
    </>
  );
};
