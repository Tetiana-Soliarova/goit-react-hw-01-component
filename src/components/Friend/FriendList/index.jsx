import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem';

const index = ({friends}) => {
    return (
        <div>
            <ul>{friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}/>       
           ))}    
            </ul>
        </div>
    );
};

index.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default index;