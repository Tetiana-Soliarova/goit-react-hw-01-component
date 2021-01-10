import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

const index = ({ avatar, name, isOnline}) => {
    return (
       <li className={styles.item} >
            <span className={isOnline ? styles.online  : styles.ofline} > </span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
       </li>
    );
};

index.propTypes = {
    friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
  
    }),
    
}       

export default index;