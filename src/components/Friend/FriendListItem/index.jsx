import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';
import defaultImage from '../default.jpg';
//import FriendList from '../FriendList';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
       <li className={styles.item} >
            <span className={isOnline ? styles.online  : styles.ofline} > </span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
       </li>
    );
};

FriendListItem.defaultProps = {
    avatar: defaultImage,
    
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


/*
FriendListItem.defaultTypes = {
    //friend: PropTypes.shape({ }),
        //name: 'не указано',
        avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
        isOnline: true,
  
   
    
}  


FriendListItem.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool.isRequired,
  
    }),
    
}  */     

export default FriendListItem;