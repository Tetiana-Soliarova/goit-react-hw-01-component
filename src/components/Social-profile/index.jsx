import React from 'react';
import PropTypes from 'prop-types';

import styles from './profile.module.css';

const Profile = ({tag, name, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}/>
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


Profile.defaultProps = {
  name: 'не указано',
   
};


Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats:PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
  }).isRequired,  
};


export default Profile;