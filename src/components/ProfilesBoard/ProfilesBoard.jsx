import PropTypes from 'prop-types';
import { Profile } from 'components/Profile/Profile';
import css from './ProfilesBoard.module.css';

export const ProfilesBoard = ({ profiles }) => {
  return (
    <div className={css.profilesBoard}>
      {profiles.map(({ username, tag, location, avatar, stats }) => (
        <Profile
          key={username}
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      ))}
    </div>
  );
};

ProfilesBoard.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.exact({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    })
  ),
};

// {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }
